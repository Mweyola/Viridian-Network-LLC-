Serverless proxy skeleton — secure LLM integration

This folder contains two minimal examples for a secure server-side proxy that can forward requests to an LLM provider without exposing API keys to the browser.

Security notes
- Never embed provider API keys in client code or public repositories.
- Enforce CORS origins, authentication, and rate limits in production.

Options provided
- Vercel Function: `vercel/api/proxy.js` — drop into a Vercel project `api/` folder and deploy.
- Local Express Proxy: `local-proxy/` — quick local server for development and testing.

Environment variables (required)
- `OPENAI_API_KEY` (or `LLM_API_KEY`) — set securely in your deployment environment.
- `ALLOWED_ORIGINS` (optional) — comma-separated origins allowed to call the proxy.

Local testing
1. From this repo root, run the local proxy:

```bash
cd serverless/local-proxy
npm install
OPENAI_API_KEY=your_key_here npm run start
# Proxy will listen on http://localhost:3001
```

2. From the frontend, send POST requests to `http://localhost:3001/api/proxy` with JSON body matching the provider requirements. The proxy will forward the call and return the response.

Deployment (Vercel)
1. Create a Vercel project linked to this repo.
2. Add `OPENAI_API_KEY` as an Environment Variable in the Vercel dashboard.
3. Deploy; the function will be available at `https://<your-deployment>/api/proxy`.

Example usage (client-side pseudo):

```js
// POST /api/proxy
fetch('/api/proxy', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ model: 'gpt-4o', prompt: 'Analyze ...' })
})
.then(r => r.json())
```

This skeleton is intentionally minimal. In production add authentication (JWT/API key), stricter origin checks, payload validation, and rate limiting.
