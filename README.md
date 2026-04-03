# Sistema Barbearia

Monorepo local para um sistema de gestão, cobrança e operação de barbearia.

## Stack

- `backend/`: Laravel API-only, autenticação, integrações e regras de negócio.
- `frontend/`: React + Vite + Supabase com as telas Stitch já incorporadas em `src/screens/`.
- `docs/`: documentação de arquitetura e operação.

## Quick Start

1. Verifique o ambiente:
   ```bash
   npm run doctor
   ```
2. Suba a stack completa:
   ```bash
   npm run dev
   ```
   O comando espera o backend responder em `api/v1/health` e encerra com diagnostico se o Laravel nao ficar disponivel.

## Scripts da Raiz

- `npm run dev`: sobe backend e frontend juntos.
- `npm run backend:dev`: sobe apenas a API Laravel.
- `npm run frontend:dev`: sobe apenas o React.
- `npm run frontend:build`: gera o build do frontend.
- `npm run frontend:lint`: roda o lint da app ativa do frontend.
- `npm run backend:test`: roda os testes do Laravel.
- `npm run backend:diagnose`: verifica se o backend responde na mesma URL consultada pelo frontend e aponta a causa mais provavel quando nao responde.
- `npm run doctor`: valida ferramentas e arquivos essenciais.

## Ambiente

Cada app mantém seu próprio `.env`:

- `backend/.env` para Laravel e banco.
- `frontend/.env` para Supabase no navegador.

Consulte [docs/architecture.md](docs/architecture.md) e [docs/development.md](docs/development.md) para a estrutura e o fluxo recomendado.
