# Igrejawebsite - Next.js (App Router)

Arquitetura refatorada para um padrão **feature-based, modular e escalável**.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Scripts
- `npm run dev`
- `npm run build`
- `npm run start`

## Estrutura principal
- `src/app`: rotas e layouts por segmento (`(site)` e `(admin)`)
- `src/features`: domínio isolado por feature
- `src/components`: componentes reutilizáveis de UI, layout e shared
- `src/services`: serviços transversais (api/email/logger)
- `src/lib`: utilitários e validações
