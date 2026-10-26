#!/usr/bin/env node
/**
 * Creates the GoHighLevel (GHL) custom fields and pipelines the forms Worker
 * needs, then writes the Worker's GHL_CONFIG JSON. Spec: docs/32-ghl-workflows.md
 * sections 4 and 5.
 *
 * Run it on your own machine. The token never leaves it.
 *
 *   # Dry run (default). Reads GHL, creates nothing, shows what would change.
 *   node --env-file=PATH_TO_ENV scripts/ghl-setup.mjs
 *
 *   # Create what is missing, then write ghl-config.generated.json.
 *   node --env-file=PATH_TO_ENV scripts/ghl-setup.mjs --apply
 *
 * Needs GHL_API_TOKEN and GHL_LOCATION_ID in the environment. Optional:
 * GHL_API_VERSION (default v3).
 *
 * Safe to rerun. Anything that already exists by name is skipped, never
 * changed or deleted. It does not build workflows (GHL workflows are set up in
 * the GHL app), and it prints names and IDs only, never the token.
 *
 * Token scopes: read and write for location custom fields, create for
 * pipelines, and read for opportunities. Confirm the names in GHL's scope picker.
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";

const BASE = "https://services.leadconnectorhq.com";

/** Payload key -> GHL contact custom field. receivedAt is TEXT because DATE_TIME is Labs-only. */
export const CUSTOM_FIELDS = [
  ["serviceNeed", "Service Need", "TEXT"],
  ["vehicleCount", "Vehicle or Asset Count", "TEXT"],
  ["projectLocations", "Project Locations", "TEXT"],
  ["timeline", "Preferred Timeline", "TEXT"],
  ["description", "Project Description", "LARGE_TEXT"],
  ["homeMarket", "Home Market or Region", "TEXT"],
  ["experienceSummary", "Experience Summary", "LARGE_TEXT"],
  ["platforms", "Platform Experience", "TEXT"],
  ["toolsOwned", "Tools Owned", "LARGE_TEXT"],
  ["travelAvailability", "Travel Availability", "LARGE_TEXT"],
  ["skillsExperience", "Skills and Experience", "LARGE_TEXT"],
  ["jobSlug", "Job ID", "TEXT"],
  ["jobTitle", "Job Title", "TEXT"],
  // Application answers (decisions 0021 to 0024). Nine hold "Yes" or "No".
  // Privacy Consent is a required checkbox, so it always holds "Yes". The
  // names are kept so existing IDs still match.
  ["validDriversLicense", "Confirmed - Valid Driver License", "TEXT"],
  ["personalVehicle", "Confirmed - Personal Vehicle", "TEXT"],
  ["providesOwnToolsAndTravel", "Confirmed - Own Tools and Travel Resources", "TEXT"],
  ["smartphone", "Confirmed - Smartphone", "TEXT"],
  ["backgroundCheckConsent", "Confirmed - Background Check Consent", "TEXT"],
  ["travelPercentAcknowledged", "Confirmed - Travel Requirement", "TEXT"],
  ["stateToStateTravelAcknowledged", "Confirmed - State-to-State Travel", "TEXT"],
  ["trainingAcknowledged", "Confirmed - Training Provided", "TEXT"],
  ["independentContractorAcknowledged", "Confirmed - Independent Contractor Status", "TEXT"],
  ["privacyConsent", "Confirmed - Privacy Consent", "TEXT"],
  ["receivedAt", "Consent Recorded At", "TEXT"],
  ["submissionId", "Submission ID", "TEXT"],
  ["sourcePage", "Source Page", "TEXT"],
  ["referrer", "Referrer", "TEXT"],
  ["utmSource", "UTM Source", "TEXT"],
  ["utmMedium", "UTM Medium", "TEXT"],
  ["utmCampaign", "UTM Campaign", "TEXT"],
  ["utmContent", "UTM Content", "TEXT"],
  ["utmTerm", "UTM Term", "TEXT"],
].map(([key, name, dataType]) => ({ key, name, dataType }));

/**
 * One pipeline per journey. The first stage is where the Worker creates
 * opportunities. Commercial and Recruitment stages are from docs/14 sections 49
 * and 48. The Installer Network stages are a proposal awaiting approval
 * (docs/32 section 5): edit them here before --apply, or rename them in GHL.
 */
export const PIPELINES = [
  {
    formType: "commercial_inquiry",
    name: "Commercial",
    stages: [
      "Inquiry received",
      "Review pending",
      "Contact attempted",
      "Discovery scheduled",
      "Qualified opportunity",
      "Scope or estimate in progress",
      "Proposal issued",
      "Won",
      "Lost",
      "Not a fit",
      "Future follow-up",
    ],
  },
  {
    formType: "installer_network",
    name: "Installer Network",
    stages: [
      "Registered",
      "Reviewed",
      "Future opportunity",
      "Contacted for an opportunity",
      "Not proceeding",
      "Withdrawn",
      "Unreachable",
    ],
  },
  {
    formType: "job_application",
    name: "Recruitment",
    stages: [
      "Application received",
      "Review pending",
      "Minimum criteria review",
      "Qualified for contact",
      "Contact attempted",
      "Screening scheduled",
      "Screening completed",
      "Technical evaluation or interview",
      "Approved pending requirements",
      "Onboarding",
      "Activated installer",
      "Future opportunity or network",
      "Not proceeding",
      "Withdrawn",
      "Unreachable",
    ],
  },
];

const same = (a, b) => String(a).trim().toLowerCase() === String(b).trim().toLowerCase();

function makeClient({ token, version, fetchImpl }) {
  return async function request(method, path, body) {
    const response = await fetchImpl(`${BASE}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        Version: version,
        Accept: "application/json",
        ...(body ? { "Content-Type": "application/json" } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    let json = null;
    try {
      json = await response.json();
    } catch {
      // Empty or non-JSON body.
    }
    if (!response.ok) {
      const raw = json?.message;
      const message = (Array.isArray(raw) ? raw.join("; ") : String(raw ?? "")).slice(0, 200);
      throw new Error(
        `${method} ${path.split("?")[0]} failed with status ${response.status}${message ? `: ${message}` : ""}`,
      );
    }
    return json;
  };
}

async function load(request, locationId) {
  const fieldsResponse = await request(
    "GET",
    `/locations/${encodeURIComponent(locationId)}/customFields`,
  );
  const pipelinesResponse = await request(
    "GET",
    `/opportunities/pipelines?locationId=${encodeURIComponent(locationId)}`,
  );
  return {
    fields: fieldsResponse?.customFields ?? [],
    pipelines: pipelinesResponse?.pipelines ?? [],
  };
}

function buildConfig(locationId, state) {
  const customFields = {};
  for (const wanted of CUSTOM_FIELDS) {
    const found = state.fields.find((f) => same(f.name, wanted.name));
    if (!found) return null;
    customFields[wanted.key] = found.id;
  }
  const pipelines = {};
  for (const wanted of PIPELINES) {
    const pipeline = state.pipelines.find((p) => same(p.name, wanted.name));
    const stage = pipeline?.stages?.find((s) => same(s.name, wanted.stages[0]));
    if (!pipeline || !stage) return null;
    pipelines[wanted.formType] = { pipelineId: pipeline.id, stageId: stage.id };
  }
  return { locationId, pipelines, customFields };
}

/**
 * Returns { config, created, missing }. `config` is null until every custom
 * field and pipeline exists. With apply false it only reads from GHL.
 */
export async function run({
  token,
  locationId,
  version = "v3",
  apply = false,
  fetchImpl = fetch,
  log = console.log,
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
}) {
  const request = makeClient({ token, version, fetchImpl });
  let state = await load(request, locationId);

  const missingFields = CUSTOM_FIELDS.filter(
    (wanted) => !state.fields.some((f) => same(f.name, wanted.name)),
  );
  const missingPipelines = PIPELINES.filter(
    (wanted) => !state.pipelines.some((p) => same(p.name, wanted.name)),
  );

  log(`Custom fields: ${CUSTOM_FIELDS.length - missingFields.length} exist, ${missingFields.length} to create.`);
  for (const f of missingFields) log(`  + ${f.name} (${f.dataType})`);
  log(`Pipelines: ${PIPELINES.length - missingPipelines.length} exist, ${missingPipelines.length} to create.`);
  for (const p of missingPipelines) log(`  + ${p.name} (${p.stages.length} stages)`);

  const created = { fields: [], pipelines: [] };

  if (apply) {
    for (const f of missingFields) {
      await request("POST", `/locations/${encodeURIComponent(locationId)}/customFields`, {
        name: f.name,
        dataType: f.dataType,
        model: "contact",
      });
      created.fields.push(f.name);
      log(`  created field: ${f.name}`);
      await sleep(200);
    }
    for (const p of missingPipelines) {
      await request("POST", "/opportunities/pipelines", {
        name: p.name,
        locationId,
        stages: p.stages.map((name, index) => ({ name, position: index, showInFunnel: true })),
      });
      created.pipelines.push(p.name);
      log(`  created pipeline: ${p.name}`);
      await sleep(200);
    }
    state = await load(request, locationId);
  } else if (missingFields.length + missingPipelines.length > 0) {
    log("Dry run. Nothing was created. Rerun with --apply to create the items above.");
  }

  const config = buildConfig(locationId, state);
  if (!config && apply) {
    log("Some items are still missing after creating them. Check GHL, then rerun.");
  }
  return { config, created, missing: { fields: missingFields.length, pipelines: missingPipelines.length } };
}

async function main() {
  const token = process.env.GHL_API_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) {
    console.error("Set GHL_API_TOKEN and GHL_LOCATION_ID (see the header of this script).");
    process.exit(1);
  }
  const apply = process.argv.includes("--apply");
  const outIndex = process.argv.indexOf("--out");
  const out =
    outIndex > -1 && process.argv[outIndex + 1]
      ? process.argv[outIndex + 1]
      : fileURLToPath(new URL("../ghl-config.generated.json", import.meta.url));

  try {
    const { config } = await run({
      token,
      locationId,
      version: process.env.GHL_API_VERSION || "v3",
      apply,
    });
    if (config) {
      writeFileSync(out, `${JSON.stringify(config, null, 2)}\n`);
      console.log(`Wrote ${out}. It holds IDs only. It is git-ignored. Delete it after you set GHL_CONFIG.`);
    }
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Setup failed.");
    process.exit(1);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
