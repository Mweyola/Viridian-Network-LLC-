// Minimal local Express proxy for development
const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')

const app = express()
app.use(express.json({ limit: '1mb' }))

const ALLOWED = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean)
app.use((req, res, next) => {
  if (ALLOWED.length) {
    const origin = req.headers.origin
    if (!ALLOWED.includes(origin)) {
      res.status(403).json({ error: 'Origin not allowed' })
      return
    }
  }
  next()
})

app.post('/api/proxy', async (req, res) => {
  const apiKey = process.env.OPENAI_API_KEY || process.env.LLM_API_KEY
  if (!apiKey) return res.status(500).json({ error: 'Missing API key in server environment' })

  try {
    const body = req.body
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    })
    const json = await r.json()
    res.status(r.status).json(json)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Proxy error' })
  }
})

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Local proxy listening on http://localhost:${port}`))
