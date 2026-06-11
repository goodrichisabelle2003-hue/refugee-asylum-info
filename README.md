# Bienvenue Aid | Asylum Support France

A static, mobile-friendly public-service navigator for asylum seekers, refugees, recently arrived migrants, sponsors, volunteers, and case workers in France.

The app organizes public information and verified source links. It is not legal advice, not a government service, and does not collect personal case details.

## Current Repo Audit

- Framework: none. This is a static HTML/CSS/vanilla JavaScript app.
- Entry points: `index.html`, `styles.css`, `app.js`.
- Data model: resource records live in `data/resources.json`; UI checklist steps and UI translations live in `app.js`.
- Styling: custom CSS with responsive grids, visible focus styles, reduced-motion support, RTL support for Dari, and print styles for the saved plan.
- Filtering/search: client-side search across name, category, summary, description, needs, status, region/city, languages, source name, and next step. Filters cover need, region/city/service area, status, urgency, language, access type, data quality, and cost.
- Saved plan: stores only resource IDs in `localStorage` under `bienvenueAidPlan`. Do not store names, case details, identity facts, or asylum story information.
- Deployment assumption: static hosting such as GitHub Pages. Because the app fetches `data/resources.json`, run it through a web server locally rather than opening `index.html` directly from disk.
- Known assets: `images/asylum-support-hero.png`; QR code assets may exist locally but are not required for app runtime.
- Earlier issues addressed: inline resource data removed from `app.js`; resource cards now show source, last verified date, data-quality badge, eligibility, cost, service area, and next step; unsafe resource HTML injection avoided.

## Run Locally

```bash
python3 -m http.server 4174
```

Then open:

```text
http://127.0.0.1:4174/
```

## Validate Data

```bash
npm run validate:data
npm test
```

The validator checks required fields, unique IDs, URL format, ISO `last_verified` dates, allowed source/data-quality values, emergency categorization, duplicate names/URLs, and review-age warnings.

## Deploy

This remains deployable as a static site. For GitHub Pages, use:

- Source: `main`
- Folder: `/root`

Expected Pages URL:

```text
https://goodrichisabelle2003-hue.github.io/refugee-asylum-info/
```

## Update Data

1. Edit `data/resources.json`.
2. Verify every factual claim against the resource source page.
3. Update `last_verified` using `YYYY-MM-DD`.
4. Add verification notes when anything is partial, blocked, or uncertain.
5. Run `npm run validate:data`.
6. Update `SOURCES.md` if a new source is used or a source fact changes.

## Privacy and Safety

- No login.
- No analytics or tracking scripts.
- No sensitive personal-data forms.
- Saved plan stores only public resource IDs in browser localStorage.
- Users should confirm deadline-sensitive or case-specific questions with SPADA, qualified associations, lawyers, or official government sources.

## Known Limitations

- Resource descriptions are concise and mostly in English; official source pages remain the authority.
- Some official French sites block automated checks. These resources are marked `Needs review` when appropriate.
- Local nonprofit opening hours, appointment rules, phone numbers, and addresses change often and are intentionally omitted unless verified from source pages.
- This is an initial national dataset, not a complete directory for every department or city.
