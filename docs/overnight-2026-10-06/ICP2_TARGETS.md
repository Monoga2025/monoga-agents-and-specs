# ICP 2 local targets - Bucaramanga / Santander (research-only)

Research-only. Not imported to the CRM. Not permission to contact. Observed 2026-10-05 from public company sites only. Nothing was contacted, no forms were submitted, no WhatsApp links were opened. WhatsApp numbers, phones and emails were not recorded, and no personal names are included. The six companies already in `docs/PROSPECT_RESEARCH.md` are excluded.

## Method

1. Searched by sector (dental/aesthetics, dealers/workshops, solar/security/HVAC, real estate, education, distributors) for sites with a quote, appointment or WhatsApp CTA.
2. Fetched each company's own site and kept only what the page showed: sector, city as claimed, CTA text, branch/scale claims.
3. Pain and offer are hypotheses. Confidence rates how well public signals match "sells by conversation", not whether they would buy.

Yield was weak: search mostly returned directories, so 19 usable sites came out of roughly 50 attempts. Dropped: INELDEC (Cúcuta), Sunny Future (Cali), Dra Alba Corzo (not a local SME), companies with no reachable site (Codiesel, Red Dental, Hacienda Bucaramanga, Arrendamientos Ogliastri), and others with no city evidence.

## Table (19)

| # | Company | Sector | Observed signal | Scale claim | Fit |
|---|---|---|---|---|---|
| 1 | Innovation Ingeniería | Solar/security | "Cotiza tu proyecto" via WhatsApp | 130+ projects, 10 cities | medium |
| 2 | Ingeniería Eléctrica IEC | Solar | Quote form + WhatsApp chat | 4000+ kW, 50+ clients | medium |
| 3 | Domótica Bucaramanga | Home automation | "Cotiza Ahora" via WhatsApp | unknown, small | low |
| 4 | Alcam Seguridad | Security | "Contáctenos" for quotes | one HQ | low |
| 5 | ACONFRIOS | HVAC | contact options | one site | low |
| 6 | Central Motor | Dealer (Hyundai) | "Agendar test drive", "Agendar cita de taller" | one site | medium |
| 7 | Mayorautos Eurocars | Dealer (Volvo) | online quote + advisor WhatsApp | one site | low |
| 8 | Sanautos Center | Workshop/parts | "Agenda tu servicio", "Cotizar repuesto" | 4 workshops | low |
| 9 | TecniRacer | Auto repair | "cotiza ahora" | 1 site, 6 mechanics | medium |
| 10 | Dental Center Bga | Dental | "Request your appointment now!" | single | medium |
| 11 | Feisal Duarte | Dental | "Agenda tu cita" to WhatsApp | 2 cities | medium |
| 12 | Natural Imagen | Aesthetic medicine | appointment booking, WhatsApp | team | medium |
| 13 | Praxis English | Education | "Reserva tu Lugar", price consult | 50 teachers | medium |
| 14 | ULA Idiomas | Education | none for Bucaramanga | national | low |
| 15 | Domínguez Parra | Real estate | advisor contact, free visit | 3 offices | medium |
| 16 | Esteban Ríos | Real estate | valuation/request portals | 4 offices | low |
| 17 | HG Inmobiliaria | Real estate | advisors via WhatsApp | single | medium |
| 18 | Galería Inmobiliaria | Real estate | WhatsApp for properties | 32+ years | low |
| 19 | Ferretería Aldia | Wholesale hardware | quotations, credit, WhatsApp | 2 sites | medium |

Full fields (source URL, pain, offer, caveat) are in `ICP2_TARGETS.csv`. Count: 0 high, 10 medium, 9 low.

## Five best and why (hypotheses)

1. **Innovation Ingeniería:** a quote CTA through WhatsApp plus multi-city scale suggests many quote conversations and a long sales cycle, where follow-up matters most. Solar ticket sizes make a pilot easy to justify.
2. **Praxis English Academy:** "Reserva tu Lugar" and price/schedule consultation form an enrollment funnel with many repeated questions; scale (50 teachers claimed) suggests budget. Risk: may already have a process.
3. **Domínguez Parra:** three offices and advisor-based visit scheduling mean leads are split across people and sites; follow-up and visibility are likely weak points.
4. **Natural Imagen:** appointment-based, high-value valuation leads, where reply speed and no-show follow-up matter. Needs extra care with health-data consent.
5. **Ferretería Aldia:** B2B quotes, credit offers and WhatsApp suggest high quote volume and slow turnaround. Larger company, so a diagnosis comes first.

## Caveats

- Years, projects and branches are self-published and unverified. No size, revenue or buying capacity was verified.
- A CTA, form or WhatsApp button is not consent to be contacted. Any outreach needs Daniel's separate approval and a legitimate basis (Ley 1581 / Habeas Data review; not legal advice).
- Dealers and large chains probably use brand or ERP/CRM systems; fit is least certain there.
- Pages were read through an automated summarizer, so CTA wording is approximate. Re-check the live page before quoting.
- Next step if approved: pick 3-5, find a legitimate warm path, and run a permissioned 30-minute diagnosis.
