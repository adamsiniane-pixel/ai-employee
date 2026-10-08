# AI Employee

AI Employee is a lightweight Node.js + Express + TypeScript service scaffold for a modern AI workflow app. It includes starter integrations for:

- Anthropic Claude
- Supabase
- Stripe
- Google APIs
- Express API routes

## Features

- Health check endpoint
- AI chat route using Claude
- Supabase client initialization
- Stripe checkout route scaffold
- TypeScript-ready project structure

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

3. Fill in your credentials in `.env`.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Project structure

```text
src/
  config/
    env.ts
  lib/
    anthropic.ts
    stripe.ts
    supabase.ts
  routes/
    ai.ts
    health.ts
    stripe.ts
  index.ts
.env.example
package.json
tsconfig.json
```

## Routes

- `GET /health` — service health status
- `POST /api/ai/chat` — send a prompt to Claude
- `POST /api/stripe/checkout` — create a Stripe checkout session

## Example AI request

```bash
curl -X POST http://localhost:3000/api/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Write a short product launch summary."}'
```

## License

MIT
