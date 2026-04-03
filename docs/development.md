# Development Guide

Prerequisites:

- Node.js 24 or newer
- PHP with `pgsql` and `pdo_pgsql`
- Composer available through `tools/composer.phar` or a global install

Recommended flow:

1. Run `npm run doctor`.
2. Start the full stack with `npm run dev`.
3. Keep Supabase keys in the app-level `.env` files, not in the root.
4. Use `frontend:build` and `backend:test` before shipping changes.

Conventions:

- Keep UI code in `frontend/src`.
- Keep API and database changes in `backend`.
- Keep root-level code limited to orchestration, docs, and developer experience.
- Keep the integrated Stitch surfaces under `frontend/src/screens` and route them through the active React shell.
- The root lint gate checks the active app shell and the integrated screen registry.
- The backend is API-only; Laravel web/Vite scaffold files are intentionally removed.

Troubleshooting:

- If `php` is not found, reopen the terminal after installing PHP.
- If Laravel cannot connect to Supabase, confirm `DB_HOST=db.llfohlqwythkozphwkfo.supabase.co`, `DB_PORT=5432`, `DB_DATABASE=postgres`, `DB_USERNAME=postgres`, a valid `DB_PASSWORD`, and `DB_SSLMODE=require`.
- If the React app cannot read Supabase, confirm `VITE_SUPABASE_URL=https://llfohlqwythkozphwkfo.supabase.co` and `VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY`.
