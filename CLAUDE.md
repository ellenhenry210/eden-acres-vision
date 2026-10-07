# Project rules for AI assistants and developers

@AGENTS.md

Eden Acres Ranch Estate: website and platform. Next.js 16 + Supabase + Paystack/Flutterwave. Read `docs/ARCHITECTURE.md` before changing structure.

## Must always hold

1. **Paid = confirmed server-side.** An order becomes paid only through `settle_order()` (signed webhook → stored once → re-verified with the gateway → amount and currency match) or `confirm_bank_transfer()` (admin + statement reference). Never mark paid from a redirect, query string or client call.
2. **Horse shares (`syndicate_share`) and `investment` are bank-transfer only**, after a signed agreement. Never add card checkout for them. The DB constraint and tests must keep passing.
3. **Investor area is hidden**: apply → admin approves → magic link → portal. No public links, `noindex`, RLS-gated, every data-room access logged.
4. **RLS on every table**, in the same migration that creates it, with a test in `tests/db/`.
5. **Prices from the database**, amounts as integer minor units.
6. **Missing keys mean "Coming soon"**, never a crash (`features` in `src/lib/env.ts`).
7. **Truthful content**: no invented numbers; renders labelled; corrections logged publicly.
8. Never commit secrets. Never rewrite pushed history or force-push `main` (repo was Lovable-connected).

## Conventions

- Feature code in `src/features/<feature>/` (UI + server actions); shared code in `src/lib/`.
- Server-only modules start with `import "server-only"`.
- Use `userClient()` for user actions (RLS applies); `adminClient()` only for trusted jobs after an explicit role check.
- Brand tokens only from `src/app/globals.css` (`bg-green`, `text-gold`, `font-display`, …). No hard-coded hex colours in components.
- Design reference: `design/prototype/index.html`.
- Before committing: `npm run check`.
