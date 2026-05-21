import React, { useRef, useState } from 'react'

type Analysis = {
  communication: string
  bottleneck: string
  customerReaction: string
  nextAction: string
  mapNodes: { id: string; label: string; focus?: boolean }[]
  mapLinks: { from: string; to: string }[]
}

const examples = [
  'Leads stop responding after first contact.',
  'Customers are confused about our process.',
  'Follow-ups are being missed across channels.'
]

const analysisStages = [
  'Mapping signals…',
  'Identifying workflow friction…',
  'Generating stabilization path…'
]

function heuristics(input: string): Analysis {
  const text = input.toLowerCase()
  const nodes = ['Website', 'Contact Form', 'CRM', 'Team', 'Email', 'Scheduling']
  const mapNodes = nodes.map((n) => ({ id: n, label: n }))
  const mapLinks = [
    { from: 'Website', to: 'Contact Form' },
    { from: 'Contact Form', to: 'CRM' },
    { from: 'CRM', to: 'Team' },
    { from: 'Team', to: 'Email' },
    { from: 'Contact Form', to: 'Scheduling' }
  ]

  let communication = 'No obvious communication breakdown detected.'
  let bottleneck = 'No single bottleneck detected; system appears balanced.'
  let customerReaction = 'Customer likely feels neutral.'
  let nextAction = 'Run a focused intake review and verify ownership.'

  if (text.includes('slow') || text.includes('delay') || text.includes('late')) {
    communication = 'Responses are delayed — follow-up and routing lag.'
    bottleneck = 'Manual follow-up and CRM routing cause delays.'
    customerReaction = 'Customers feel ignored and may drop off.'
    nextAction = 'Automate follow-up reminders and route leads to an owner.'
    mapNodes[2].focus = true
  } else if (text.includes('lost') || text.includes('missing') || text.includes('not captured')) {
    communication = 'Leads are not captured reliably at intake.'
    bottleneck = 'Contact form or lead capture integration to CRM is failing.'
    customerReaction = 'Customers become frustrated when confirmations are missing.'
    nextAction = 'Audit form-to-CRM integration and add confirmations.'
    mapNodes[1].focus = true
  } else if (text.includes('confused') || text.includes('ownership') || text.includes('who')) {
    communication = 'Ownership is unclear; multiple people assume others will act.'
    bottleneck = 'Lack of clear owner for incoming requests.'
    customerReaction = 'Customers get passed around or receive mixed messages.'
    nextAction = 'Define clear ownership and single routing for incoming items.'
    mapNodes[3].focus = true
  } else if (text.includes('website') || text.includes('site') || text.includes('form')) {
    communication = 'Website messaging may not match intake expectations.'
    bottleneck = 'Website copy and form fields mismatch intake needs.'
    customerReaction = 'Customers may be surprised by next steps or missing options.'
    nextAction = 'Align website copy with intake fields and required next steps.'
    mapNodes[0].focus = true
  }

  return {
    communication,
    bottleneck,
    customerReaction,
    nextAction,
    mapNodes,
    mapLinks
  }
}

export default function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<Analysis | null>(null)
  const [status, setStatus] = useState<'idle' | 'running' | 'done'>('idle')
  const [statusText, setStatusText] = useState('')
  const timeoutIds = useRef<number[]>([])

  const clearTimers = () => {
    timeoutIds.current.forEach((id) => clearTimeout(id))
    timeoutIds.current = []
  }

  const runAnalysis = (value: string) => {
    clearTimers()
    setStatus('running')
    setResult(null)
    setStatusText(analysisStages[0])

    timeoutIds.current.push(
      window.setTimeout(() => setStatusText(analysisStages[1]), 650)
    )
    timeoutIds.current.push(
      window.setTimeout(() => setStatusText(analysisStages[2]), 1300)
    )
    timeoutIds.current.push(
      window.setTimeout(() => {
        setResult(heuristics(value))
        setStatus('done')
        setStatusText('Analysis complete.')
      }, 1900)
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    runAnalysis(trimmed)
  }

  const handleExample = (prompt: string) => {
    setInput(prompt)
    runAnalysis(prompt)
  }

  const handleClear = () => {
    clearTimers()
    setInput('')
    setResult(null)
    setStatus('idle')
    setStatusText('')
  }

  return (
    <div className="demo-root">
      <header className="demo-header">
        <div>
          <h1 className="demo-title">Systems Intelligence Preview</h1>
          <p className="demo-subtitle">Early-stage operational systems analysis preview.</p>
        </div>
      </header>

      <main className="demo-container">
        <form onSubmit={handleSubmit} className="demo-form">
          <textarea
            className="demo-input"
            rows={5}
            placeholder="Describe an operational issue, communication breakdown, or workflow problem..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="example-prompt-list">
            {examples.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="example-prompt"
                onClick={() => handleExample(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="demo-actions">
            <button type="submit" className="btn btn-primary" disabled={status === 'running'}>
              {status === 'running' ? 'Analyzing…' : 'Analyze'}
            </button>
            <button type="button" onClick={handleClear} className="btn btn-outline">
              Clear
            </button>
          </div>
        </form>

        <section className="demo-results">
          {status === 'running' && (
            <div className="status-card">
              <p>{statusText}</p>
            </div>
          )}

          {result && (
            <div className="analysis-grid">
              <article className="analysis-card">
                <h2>Signal Breakdown</h2>
                <p>{result.communication}</p>
              </article>
              <article className="analysis-card">
                <h2>Workflow Friction</h2>
                <p>{result.bottleneck}</p>
              </article>
              <article className="analysis-card">
                <h2>Customer Response Pattern</h2>
                <p>{result.customerReaction}</p>
              </article>
              <article className="analysis-card">
                <h2>Recommended Stabilization</h2>
                <p>{result.nextAction}</p>
              </article>
              <article className="map-card">
                <h2>Network Impact Map</h2>
                <svg className="map-svg" viewBox="0 0 600 220">
                  {result.mapLinks.map((link, idx) => {
                    const fromIndex = result.mapNodes.findIndex((n) => n.id === link.from)
                    const toIndex = result.mapNodes.findIndex((n) => n.id === link.to)
                    if (fromIndex === -1 || toIndex === -1) return null
                    const x1 = 50 + fromIndex * 90
                    const y1 = 60 + (fromIndex % 2) * 50
                    const x2 = 50 + toIndex * 90
                    const y2 = 60 + (toIndex % 2) * 50
                    return (
                      <g key={`link-${idx}`}>
                        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#94a3b8" strokeWidth={2} />
                        <polygon
                          points={`${x2 - 6},${y2 - 6} ${x2 + 6},${y2} ${x2 - 6},${y2 + 6}`}
                          fill="#94a3b8"
                        />
                      </g>
                    )
                  })}
                  {result.mapNodes.map((node, i) => {
                    const x = 50 + i * 90
                    const y = 60 + (i % 2) * 50
                    return (
                      <g key={node.id}>
                        <circle cx={x} cy={y} r={node.focus ? 20 : 14} fill={node.focus ? '#0f766e' : '#cbd5e1'} />
                        <text x={x} y={y + 34} textAnchor="middle" className="node-label">
                          {node.label}
                        </text>
                      </g>
                    )
                  })}
                </svg>
              </article>
            </div>
          )}
        </section>
      </main>

      <footer className="demo-footer">This preview is a local heuristic prototype — no external AI or network calls.</footer>
    </div>
  )
}
