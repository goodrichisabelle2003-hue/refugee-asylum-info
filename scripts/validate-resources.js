#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "data", "resources.json");
const resources = JSON.parse(fs.readFileSync(file, "utf8"));
const required = [
  "id", "name", "category", "resource_type", "summary", "description", "regions", "cities", "service_area",
  "needs", "statuses", "urgency", "languages", "eligibility", "cost", "hours", "address", "phone", "email",
  "website", "source_name", "source_url", "source_type", "last_verified", "data_quality", "verification_notes", "next_step",
];
const sourceTypes = new Set(["official", "nonprofit", "directory", "legal-information", "emergency", "other"]);
const qualityValues = new Set(["Verified", "Needs review", "Broken link", "Deprecated"]);
const emergencyNeeds = new Set(["emergency", "safety", "health", "housing", "accessibility"]);
const ids = new Set();
const names = new Map();
const urls = new Map();
const errors = [];
const warnings = [];
const today = new Date();
const allowedSharedSourceUrls = new Set([
  "https://www.gouvernement.fr/risques/connaitre-les-numeros-d-urgence",
]);

function add(map, key, id) {
  if (!key) return;
  const normalized = String(key).trim().toLowerCase();
  if (!map.has(normalized)) map.set(normalized, []);
  map.get(normalized).push(id);
}

function isIsoDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
}

resources.forEach((resource, index) => {
  const label = resource.id || `resource[${index}]`;
  required.forEach((field) => {
    if (!(field in resource)) errors.push(`${label}: missing required field ${field}`);
  });
  if (ids.has(resource.id)) errors.push(`${label}: duplicate id`);
  ids.add(resource.id);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(resource.id || "")) errors.push(`${label}: id must be a stable slug`);
  if (!Array.isArray(resource.resource_type) || resource.resource_type.length === 0) errors.push(`${label}: resource_type must be a non-empty array`);
  ["regions", "cities", "needs", "statuses", "languages"].forEach((field) => {
    if (!Array.isArray(resource[field])) errors.push(`${label}: ${field} must be an array`);
  });
  ["website", "source_url"].forEach((field) => {
    try { new URL(resource[field]); } catch { errors.push(`${label}: ${field} is not a valid URL`); }
  });
  if (!sourceTypes.has(resource.source_type)) errors.push(`${label}: invalid source_type ${resource.source_type}`);
  if (!qualityValues.has(resource.data_quality)) errors.push(`${label}: invalid data_quality ${resource.data_quality}`);
  if (!isIsoDate(resource.last_verified)) errors.push(`${label}: last_verified must be YYYY-MM-DD`);
  if (!resource.source_name || !resource.source_url) errors.push(`${label}: source name and URL are required`);
  if (resource.category === "Emergency") {
    const hasEmergencySignal = resource.urgency === "today" && resource.needs.some((need) => emergencyNeeds.has(need));
    if (!hasEmergencySignal) errors.push(`${label}: emergency resources must be urgent and clearly categorized`);
  }
  if (isIsoDate(resource.last_verified)) {
    const verified = new Date(`${resource.last_verified}T00:00:00Z`);
    const ageDays = Math.floor((today - verified) / 86400000);
    const threshold = ["official", "legal-information", "emergency"].includes(resource.source_type) ? 60 : 180;
    if (ageDays > threshold) warnings.push(`${label}: review is ${ageDays} days old; threshold is ${threshold} days`);
  }
  add(names, resource.name, label);
  add(urls, resource.source_url, label);
});

for (const [name, items] of names.entries()) {
  if (items.length > 1) warnings.push(`duplicate resource name "${name}": ${items.join(", ")}`);
}
for (const [url, items] of urls.entries()) {
  if (items.length > 1 && !allowedSharedSourceUrls.has(url)) {
    warnings.push(`duplicate source URL "${url}": ${items.join(", ")}`);
  }
}

warnings.forEach((warning) => console.warn(`Warning: ${warning}`));
if (errors.length) {
  errors.forEach((error) => console.error(`Error: ${error}`));
  process.exit(1);
}
console.log(`Validated ${resources.length} resources with ${warnings.length} warning(s).`);
