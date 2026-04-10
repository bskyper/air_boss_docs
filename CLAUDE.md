# Air Boss Help Documentation

This is the **Air Boss end-user help documentation** (Docusaurus). It is part of the Air Boss platform — a member management system for aircraft clubs and flight schools.

## Domain Context

### Business Rules Vault

All business rules, domain knowledge, and feature specifications live in the **air_boss_rules** vault (sibling repo). **Before writing or updating help content, read the relevant wiki pages to ensure accuracy.**

**Start here:**
- `../air_boss_rules/wiki/index.md` — Wiki catalog of all domain knowledge pages
- `../air_boss_rules/overview.md` — Product overview

**Key references for docs:**
- Member workflows: `../air_boss_rules/wiki/entities/member.md`
- Flight logging: `../air_boss_rules/wiki/entities/flight.md`
- Booking: `../air_boss_rules/wiki/entities/reservation.md`
- Documents: `../air_boss_rules/wiki/entities/document.md`
- Squawks: `../air_boss_rules/wiki/entities/squawk.md`
- Billing: `../air_boss_rules/wiki/entities/subscription.md`
- Roles & permissions: `../air_boss_rules/wiki/concepts/role-model.md`
- Hobbs/Tach explained: `../air_boss_rules/wiki/concepts/billing-method.md`

### Platform Architecture

| Layer | Repo | Tech |
|-------|------|------|
| Mobile app | `air_boss` | Flutter |
| Web dashboard | `air_boss_web` | Next.js |
| Database | `air_boss_supabase` | Supabase (Postgres + Edge Functions) |
| Business rules | `air_boss_rules` | Obsidian vault + LLM Wiki |
| Help docs | `air_boss_docs` (this repo) | Docusaurus |
