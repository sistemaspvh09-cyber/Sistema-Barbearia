# BarberPro Frontend

Frontend Vite + React + TypeScript com Tailwind, PostCSS, Autoprefixer e Supabase.

## Stack

- Vite
- React 19
- TypeScript
- Tailwind CSS
- PostCSS
- Autoprefixer
- Supabase JS

## Scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm run preview`

## Ambiente

Copie `.env.example` para `.env` ou `.env.local` e preencha:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY`

## Estrutura

- `src/screens` guarda as telas do Stitch
- `src/utils/supabase.ts` centraliza o cliente do Supabase
- `vite.config.ts` define alias e configuração de build
