# Data Quality and Governance

Bienvenue Aid handles high-risk, changeable information. The dataset must be maintained conservatively.

## Data Quality Values

- `Verified`: The source URL works, the source is authoritative for the included facts, and the resource entry avoids unsupported details.
- `Needs review`: The source is useful but one or more facts require manual review, the source blocks automated checks, or local/service details vary.
- `Broken link`: The source URL no longer works or does not show the expected resource.
- `Deprecated`: The resource is no longer active or should not be shown to users except for historical audit purposes.

## Review Cadence

- Emergency, official, and legal-information resources: every 30-60 days.
- Nonprofit and general directory entries: every 90-180 days.
- Any resource with `Needs review`: review before relying on it for contact/eligibility details.

## Add or Edit a Resource

1. Use a stable slug ID.
2. Fill every required schema field.
3. Use `YYYY-MM-DD` for `last_verified`.
4. Include only verified phone numbers, emails, addresses, hours, eligibility, and deadlines.
5. Record source facts and uncertainty in `SOURCES.md`.
6. Run `npm run validate:data`.

## Remove or Deprecate a Resource

- Use `Deprecated` only if you need to preserve an audit trail.
- Remove resources that are unrelated, unverifiable, misleading, or unsupported by a working source URL.
- Use `Broken link` only temporarily while a replacement source is being researched.

## Validator Notes

The validation script warns on duplicate names and source URLs by default. A small allowlist exists for official emergency-number source pages where one government page intentionally verifies several related emergency numbers. Add to that allowlist only when the shared source is clearly authoritative for each listed resource.

## Safety Statement

This app organizes public information. It is not legal advice. It is not a government service. In emergencies, users should call official emergency numbers. Asylum deadlines can be short and rules change; users should confirm their situation with SPADA, an accredited association, a lawyer, or an official government source.

## Privacy Statement

The app does not require login and should not ask users to enter sensitive personal details. Saved plan data may remain in localStorage, but it must only store public resource IDs, not names, identity details, case facts, asylum narratives, addresses, or documents.
