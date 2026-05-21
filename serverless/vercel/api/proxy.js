// Minimal Vercel Serverless Function proxy example
// Put this file as /api/proxy.js in a Vercel project (or keep here and adapt)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const apiKey = process.env.OPENAI_API_KEY || process.env.LLM_API_KEY
  if (!apiKey) {
    res.status(500).json({ error: 'Server not configured with API key' })
    return
  }

  // Basic origin check — customize for your domain
  const allowed = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean)
  const origin = req.headers.origin
  if (allowed.length && !allowed.includes(origin)) {
    res.status(403).json({ error: 'Origin not allowed' })
    return
  }

  try {
    // Forward the request body to the LLM provider.
    // Adapt URL and headers to your provider — example uses OpenAI Chat Completions v1
    const body = req.body
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    })

    const json = await response.json()
    res.status(response.status).json(json)
  } catch (err) {
    console.error('Proxy error', err)
    res.status(500).json({ error: 'Proxy error' })
  }
}
