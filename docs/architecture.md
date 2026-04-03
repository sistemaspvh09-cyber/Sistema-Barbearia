# Architecture

This workspace is organized as two independently deployable applications:

- `backend/` is the Laravel API-only runtime.
- `frontend/` is the Vite + React UI, with Stitch screens folded into `frontend/src/screens/`.
- `scripts/` contains root orchestration for local development and checks.

The recommended runtime boundary is simple:

- React talks to Supabase directly for low-friction reads and auth flows.
- Laravel owns business rules, auth/authz, Google/InfinitePay integrations, scheduled work, and any API that should not live in the browser.
- Supabase Postgres is the shared data layer.

Local development entry points:

- `npm run dev` starts both applications together.
- `npm run frontend:dev` starts only the React app.
- `npm run backend:dev` starts only Laravel.
- `npm run doctor` checks the machine, repo shape, and environment files.
