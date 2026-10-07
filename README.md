# Eden Acres Ranch Estate — website & platform

**LIVE • GROW • RACE • THRIVE**

The public website, shop and pre-orders, product verification, bookings, hidden investor portal and admin dashboard for Eden Acres Ranch Limited. Production domain: **edenacres.ng**.

> Status: **B0 Foundation complete.** The holding page and waitlist are ready. Next: B1, the public site. See [docs/ROADMAP.md](docs/ROADMAP.md).

## Quick start

Requires Node.js 22+.

```bash
npm install
cp .env.example .env.local   # optional: fill in keys; without them features show "Coming soon"
npm run dev                  # http://localhost:3000
```

| Command | Does |
|---|---|
| `npm run dev` | Local development server |
| `npm run check` | Typecheck + lint + all tests (run before every commit) |
| `npm test` | Unit tests + database security tests (in-memory Postgres) |
| `npm run build` | Production build |

## What's where

| Path | |
|---|---|
| `src/app` | Pages and API routes |
| `src/features` | Feature modules (waitlist, …) |
| `src/lib/payments` | Paystack, Flutterwave and bank transfer behind one interface |
| `src/lib/supabase` | Database clients |
| `supabase/migrations` | Database schema and security rules |
| `tests` | Automated tests |
| `design/prototype` | The approved clickable design (open `index.html` in a browser) |
| `docs` | Architecture, roadmap, payments, security, data model, content, owner checklist, handover |

## Docs

- [Architecture](docs/ARCHITECTURE.md): how it fits together and why
- [Roadmap](docs/ROADMAP.md): build phases B0–B5 with exit checks
- [Payments](docs/PAYMENTS.md): gateways, webhooks, bank-transfer rules
- [Security & privacy](docs/SECURITY.md): RLS, the hidden investor area, anti-counterfeit, NDPA
- [Data model](docs/DATA-MODEL.md)
- [Content](docs/CONTENT.md)
- [Owner checklist](docs/OWNER-CHECKLIST.md): accounts and decisions only the owner can make
- [Handover guide](docs/HANDOVER.md): for the developer taking over

## History

The earlier Lovable-generated site is preserved at the git tag `archive/lovable-v1`.

© Eden Acres Ranch Limited. All rights reserved.
