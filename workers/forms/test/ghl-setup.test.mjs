import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { CUSTOM_FIELDS, PIPELINES, RENAMES, run } from "../scripts/ghl-setup.mjs";

/** A fake GHL that keeps state, so create-then-reload behaves like the real thing. */
function fakeGhl({ fields = [], pipelines = [], failOn = null } = {}) {
  const state = { fields: [...fields], pipelines: [...pipelines] };
  const calls = [];
  let n = 0;
  const fetchImpl = async (url, init) => {
    const path = String(url).replace("https://services.leadconnectorhq.com", "");
    const method = init.method;
    calls.push({ method, path, headers: init.headers, body: init.body ? JSON.parse(init.body) : null });
    if (failOn && path.startsWith(failOn)) {
      return Response.json({ message: "Forbidden by scope" }, { status: 401 });
    }
    if (method === "GET" && path.includes("/customFields")) {
      return Response.json({ customFields: state.fields });
    }
    if (method === "GET" && path.startsWith("/opportunities/pipelines")) {
      return Response.json({ pipelines: state.pipelines });
    }
    if (method === "PUT" && path.includes("/customFields/")) {
      const field = state.fields.find((f) => f.id === decodeURIComponent(path.split("/").pop()));
      if (!field) return Response.json({ message: "Not found" }, { status: 404 });
      field.name = JSON.parse(init.body).name;
      field.fieldKey = `contact.${field.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}`;
      return Response.json({ customField: field });
    }
    if (method === "POST" && path.includes("/customFields")) {
      const body = JSON.parse(init.body);
      const field = { id: `F${++n}`, name: body.name, model: body.model };
      state.fields.push(field);
      return Response.json({ customField: field }, { status: 201 });
    }
    if (method === "POST" && path === "/opportunities/pipelines") {
      const body = JSON.parse(init.body);
      const pipeline = {
        id: `P${++n}`,
        name: body.name,
        stages: body.stages.map((s, i) => ({ id: `S${n}-${i}`, name: s.name })),
      };
      state.pipelines.push(pipeline);
      return Response.json(pipeline);
    }
    return Response.json({}, { status: 404 });
  };
  return { fetchImpl, calls, state };
}

const base = { token: "test-token", locationId: "LOC1", log: () => {}, sleep: async () => {} };

describe("ghl-setup", () => {
  it("dry run reads but creates nothing", async () => {
    const { fetchImpl, calls } = fakeGhl();
    const result = await run({ ...base, fetchImpl });
    assert.ok(calls.every((c) => c.method === "GET"));
    assert.equal(result.config, null);
    assert.equal(result.missing.fields, CUSTOM_FIELDS.length);
    assert.equal(result.missing.pipelines, PIPELINES.length);
  });

  it("apply creates everything and returns a complete config", async () => {
    const { fetchImpl, calls } = fakeGhl();
    const { config, created } = await run({ ...base, fetchImpl, apply: true });
    assert.equal(created.fields.length, CUSTOM_FIELDS.length);
    assert.equal(created.pipelines.length, PIPELINES.length);
    assert.equal(config.locationId, "LOC1");
    assert.deepEqual(Object.keys(config.pipelines).sort(), [
      "commercial_inquiry",
      "installer_network",
      "job_application",
    ]);
    assert.equal(Object.keys(config.customFields).length, CUSTOM_FIELDS.length);
    assert.ok(config.customFields.serviceNeed);
    // The Worker creates opportunities at each pipeline's first stage.
    const commercial = calls.find((c) => c.body?.name === "Commercial").body;
    assert.equal(commercial.stages[0].name, "Inquiry received");
    assert.equal(commercial.locationId, "LOC1");
    assert.ok(config.pipelines.commercial_inquiry.stageId.endsWith("-0"));
  });

  it("creates fields on the contact model with a supported data type", async () => {
    const { fetchImpl, calls } = fakeGhl();
    await run({ ...base, fetchImpl, apply: true });
    const posts = calls.filter((c) => c.method === "POST" && c.path.includes("/customFields"));
    assert.ok(posts.every((c) => c.body.model === "contact"));
    assert.ok(posts.every((c) => ["TEXT", "LARGE_TEXT"].includes(c.body.dataType)));
  });

  it("is idempotent: a second apply creates nothing", async () => {
    const ghl = fakeGhl();
    await run({ ...base, fetchImpl: ghl.fetchImpl, apply: true });
    const before = ghl.calls.length;
    const second = await run({ ...base, fetchImpl: ghl.fetchImpl, apply: true });
    assert.equal(second.created.fields.length, 0);
    assert.equal(second.created.pipelines.length, 0);
    assert.ok(ghl.calls.slice(before).every((c) => c.method === "GET"));
    assert.ok(second.config);
  });

  it("skips items that already exist, matching names case-insensitively", async () => {
    const { fetchImpl, calls } = fakeGhl({
      fields: [{ id: "EXIST1", name: "service need" }],
      pipelines: [{ id: "PEXIST", name: "COMMERCIAL", stages: [{ id: "SX", name: "Inquiry received" }] }],
    });
    const { created } = await run({ ...base, fetchImpl, apply: true });
    assert.ok(!created.fields.includes("Service Need"));
    assert.ok(!created.pipelines.includes("Commercial"));
    assert.ok(!calls.some((c) => c.body?.name === "Commercial"));
  });

  describe("renames", () => {
    const [{ from, to }] = RENAMES;
    const oldField = { id: "OLDVEH", name: from, fieldKey: "contact.confirmed___personal_vehicle_and_tools" };
    const puts = (calls) => calls.filter((c) => c.method === "PUT");

    it("renames the old field once in apply mode and keeps its ID", async () => {
      const logs = [];
      const ghl = fakeGhl({ fields: [{ ...oldField }] });
      const { config, created } = await run({ ...base, fetchImpl: ghl.fetchImpl, apply: true, log: (l) => logs.push(l) });
      const sent = puts(ghl.calls);
      assert.equal(sent.length, 1);
      assert.equal(sent[0].path, "/locations/LOC1/customFields/OLDVEH");
      assert.deepEqual(sent[0].body, { name: to, model: "contact" });
      assert.equal(sent[0].headers.Version, "v3");
      assert.deepEqual(created.renamed, [to]);
      // No duplicate is created, and the ID is unchanged.
      assert.ok(!created.fields.includes(to));
      assert.equal(config.customFields.personalVehicle, "OLDVEH");
      assert.equal(ghl.state.fields.filter((f) => f.id === "OLDVEH").length, 1);
      // Names and keys are logged, never the token.
      const text = logs.join("\n");
      assert.ok(text.includes("contact.confirmed___personal_vehicle_and_tools ->"));
      assert.ok(!text.includes("test-token"));
    });

    it("sends only reads in a dry run and counts the rename as satisfying the new name", async () => {
      const logs = [];
      const ghl = fakeGhl({ fields: [{ ...oldField }] });
      const result = await run({ ...base, fetchImpl: ghl.fetchImpl, log: (l) => logs.push(l) });
      assert.ok(ghl.calls.every((c) => c.method === "GET"));
      assert.ok(logs.includes(`  ~ rename: ${from} -> ${to}`));
      assert.equal(result.missing.fields, CUSTOM_FIELDS.length - 1);
      assert.equal(ghl.state.fields[0].name, from);
    });

    it("is a no-op on the second run", async () => {
      const ghl = fakeGhl({ fields: [{ ...oldField }] });
      await run({ ...base, fetchImpl: ghl.fetchImpl, apply: true });
      const before = ghl.calls.length;
      const second = await run({ ...base, fetchImpl: ghl.fetchImpl, apply: true });
      assert.deepEqual(second.created.renamed, []);
      assert.equal(second.created.fields.length, 0);
      assert.ok(ghl.calls.slice(before).every((c) => c.method === "GET"));
    });

    it("warns and renames nothing when both names exist", async () => {
      const logs = [];
      const ghl = fakeGhl({ fields: [{ ...oldField }, { id: "NEWVEH", name: to }] });
      const { created } = await run({ ...base, fetchImpl: ghl.fetchImpl, apply: true, log: (l) => logs.push(l) });
      assert.equal(puts(ghl.calls).length, 0);
      assert.deepEqual(created.renamed, []);
      assert.ok(logs.some((l) => l.includes("warning") && l.includes(from) && l.includes(to)));
      assert.ok(ghl.state.fields.some((f) => f.id === "OLDVEH" && f.name === from));
      assert.ok(ghl.state.fields.some((f) => f.id === "NEWVEH" && f.name === to));
    });

    it("matches the old name case-insensitively", async () => {
      const ghl = fakeGhl({ fields: [{ id: "OLDVEH", name: from.toUpperCase() }] });
      await run({ ...base, fetchImpl: ghl.fetchImpl, apply: true });
      assert.equal(puts(ghl.calls).length, 1);
    });

    it("does nothing when neither name exists", async () => {
      const ghl = fakeGhl();
      const { created } = await run({ ...base, fetchImpl: ghl.fetchImpl, apply: true });
      assert.equal(puts(ghl.calls).length, 0);
      assert.ok(created.fields.includes(to));
    });
  });

  it("sends the token and version, and never prints the token", async () => {
    const logs = [];
    const { fetchImpl, calls } = fakeGhl();
    await run({ ...base, fetchImpl, apply: true, version: "v3", log: (l) => logs.push(l) });
    assert.ok(calls.every((c) => c.headers.Authorization === "Bearer test-token"));
    assert.ok(calls.every((c) => c.headers.Version === "v3"));
    assert.ok(!logs.join("\n").includes("test-token"));
  });

  it("stops with the status and message when GHL rejects a call", async () => {
    const { fetchImpl } = fakeGhl({ failOn: "/locations/LOC1/customFields" });
    await assert.rejects(run({ ...base, fetchImpl }), /status 401: Forbidden by scope/);
  });

  it("returns no config when a pipeline has no first stage to point at", async () => {
    const { fetchImpl } = fakeGhl({
      fields: CUSTOM_FIELDS.map((f, i) => ({ id: `F${i}`, name: f.name })),
      pipelines: PIPELINES.map((p, i) => ({ id: `P${i}`, name: p.name, stages: [] })),
    });
    const { config } = await run({ ...base, fetchImpl });
    assert.equal(config, null);
  });
});
