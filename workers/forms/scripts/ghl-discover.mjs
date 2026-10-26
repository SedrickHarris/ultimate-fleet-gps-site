#!/usr/bin/env node
/**
 * Prints the GHL IDs the Worker's GHL_CONFIG needs: pipelines with their
 * stages, and custom fields. Read-only. Run it locally, never in CI.
 *
 *   GHL_API_TOKEN=... GHL_LOCATION_ID=... node scripts/ghl-discover.mjs
 *
 * The token needs read access to opportunities and to location custom fields.
 * Output holds IDs and names only. Nothing here is written to disk.
 */
const token = process.env.GHL_API_TOKEN;
const locationId = process.env.GHL_LOCATION_ID;
if (!token || !locationId) {
  console.error("Set GHL_API_TOKEN and GHL_LOCATION_ID.");
  process.exit(1);
}

const base = "https://services.leadconnectorhq.com";
const headers = {
  Authorization: `Bearer ${token}`,
  Version: process.env.GHL_API_VERSION || "v3",
  Accept: "application/json",
};

async function get(path) {
  const response = await fetch(`${base}${path}`, { headers });
  if (!response.ok) {
    console.error(`GET ${path.split("?")[0]} failed with status ${response.status}`);
    process.exit(1);
  }
  return response.json();
}

const pipelines = await get(
  `/opportunities/pipelines?locationId=${encodeURIComponent(locationId)}`,
);
console.log("PIPELINES AND STAGES");
for (const pipeline of pipelines.pipelines ?? []) {
  console.log(`\n${pipeline.name}  pipelineId=${pipeline.id}`);
  for (const stage of pipeline.stages ?? []) {
    console.log(`  ${stage.name}  stageId=${stage.id}`);
  }
}

const fields = await get(
  `/locations/${encodeURIComponent(locationId)}/customFields`,
);
console.log("\nCUSTOM FIELDS");
for (const field of fields.customFields ?? []) {
  console.log(`${field.name}  id=${field.id}  key=${field.fieldKey ?? ""}`);
}
