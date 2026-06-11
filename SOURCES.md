# Sources

Accessed: 2026-06-11

This file records the sources used to seed `data/resources.json`. Facts are intentionally conservative. When a source was reachable but did not verify local contact details, the app omits those details.

| Source | URL | Source type | Facts used | Uncertainty / notes |
|---|---|---|---|---|
| Gouvernement.fr emergency numbers | https://www.gouvernement.fr/risques/connaitre-les-numeros-d-urgence | emergency / official | Emergency numbers 15, 17, 112. | Automated fetch returned 403; included with `Needs review` and manual-review note. |
| Info.gouv.fr 114 emergency access | https://www.info.gouv.fr/actualite/114-le-numero-durgence-au-service-des-personnes-ayant-des-difficultes-a-parler-ou-a-entendre | emergency / official | 114 emergency access for people with difficulty speaking or hearing. | Automated fetch returned 403; included with `Needs review` and manual-review note. |
| Samu social de Paris - 115 | https://www.samu-social.paris/115 | emergency | 115 emergency social accommodation orientation. | Source is Paris-based but describes 115; local capacity varies. |
| Service-Public.fr - Demande d'asile | https://www.service-public.gouv.fr/particuliers/vosdroits/N106 | official | Official asylum topic page; links to asylum application, social aid, work rights, Dublin questions, appeal questions, and official guides. | Users must confirm specific deadlines and eligibility. |
| OFPRA - Demander l'asile | https://www.ofpra.gouv.fr/dossier/demander-lasile | official | OFPRA asylum application process page; SPADA, guichet unique / France asile pole, OFPRA steps. | OFPRA procedure changes must be reviewed often. |
| OFII - Demandeurs d'asile | https://www.ofii.fr/demandeurs-dasile/ | official | Reception-condition orientation for asylum seekers. | Specific eligibility depends on procedure and OFII assessment. |
| CNDA - Deposer mon recours | https://www.cnda.fr/vos-demarches/je-suis-un-demandeur/deposer-mon-recours | official | Appeal information after OFPRA decisions, what can be contested, who can file, and deadline language. | Users must confirm their own notification date and deadline. |
| UNHCR France Help | https://help.unhcr.org/france/ | legal-information | UNHCR help site for refugees, asylum seekers, stateless people, family members, and helpers; topic areas include asylum, rights, family, statelessness, resettlement, exploitation/abuse. | Informational, not a substitute for case-specific legal advice. |
| La Cimade | https://www.lacimade.org/ | nonprofit | National/regional nonprofit support topics: asylum, local regions, unaccompanied minors, victims of violence, housing, French courses, and help pages. | Local schedules/contact details must be checked on regional pages. |
| GISTI | https://www.gisti.org/ | legal-information | Specialist legal-information source for foreign nationals' rights. | Browser access showed an anti-bot page; marked `Needs review`. |
| France terre d'asile | https://www.france-terre-asile.org/ | nonprofit | Nonprofit supporting asylum seekers/refugees through reception, rights access, accommodation, and integration services. | Program-level details need review before adding contacts. |
| Restos du Coeur | https://www.restosducoeur.org/ | nonprofit | Food/material aid through local centers. | Local registration and hours vary. |
| Croix-Rouge francaise | https://www.croix-rouge.fr/ | nonprofit | Local emergency/social aid and orientation. | Local delegation details vary. |
| Secours Catholique | https://www.secours-catholique.org/ | nonprofit | Local welfare/material/social support. | Local delegation details vary. |
| Secours Populaire francais | https://www.secourspopulaire.fr/ | nonprofit | Local solidarity, food, and material support. | Local federation details vary. |

## Source Audit Notes

- Do not add a phone number, address, opening hour, or eligibility rule unless it appears in the cited source or another documented source.
- If a source blocks automated checks but is official and important, include it only with `Needs review` and explain the limitation.
- If a link returns 404 or redirects to unrelated content, do not include the resource until the source is fixed.
