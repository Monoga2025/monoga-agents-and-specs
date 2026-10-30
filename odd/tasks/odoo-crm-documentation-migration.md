# Odoo CRM documentation migration

## Goal
Replace active CRM references to Twenty with Odoo at `https://odoo.grupomonoga.com`, while preserving Twenty references as historical context where needed for auditability.

## Constraints
- Documentation-only; no CRM mutation, contact creation, imports, or external sends.
- Do not claim authenticated access or Railway integration without direct evidence.
- Preserve historical records and distinguish current Odoo from legacy Twenty.
- Do not invent Odoo models, stages, fields, credentials, or pipeline state.

## Tasks
- [ ] Define migration scope and evidence.
- [ ] Update active sales documentation references.
- [ ] Verify consistency and report access limitations.

## Evidence
- Odoo URL supplied by owner: `https://odoo.grupomonoga.com`.
- Anonymous fetch reached a JavaScript-rendered application; authenticated session was not available.
- Existing docs identify Twenty as historical/current guidance and explicitly state live CRM was not queried.

## Approval
Owner explicitly requested replacement of active references and verification of Odoo access. No credentials or authenticated Railway control channel are available in this session.
