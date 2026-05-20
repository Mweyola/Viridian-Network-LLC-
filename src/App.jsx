import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isConsultOpen, setIsConsultOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsConsultOpen(false)
        setIsContactOpen(false)
        setIsPortfolioOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleConsultSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const name = formData.get('name')?.toString().trim() || 'Not provided'
    const email = formData.get('email')?.toString().trim() || 'Not provided'
    const business = formData.get('business')?.toString().trim() || 'Not provided'
    const message = formData.get('message')?.toString().trim() || 'Not provided'
    const subject = 'Viridian consultation request'
    const body = `Name: ${name}\nEmail: ${email}\nBusiness: ${business}\n\nWhat they need:\n${message}`
    window.location.href = `mailto:hello@viridiannetworkllc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setIsConsultOpen(false)
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const name = formData.get('name')?.toString().trim() || 'Not provided'
    const email = formData.get('email')?.toString().trim() || 'Not provided'
    const bestTime = formData.get('bestTime')?.toString().trim() || 'Not provided'
    const subject = 'Viridian contact request'
    const body = `Name: ${name}\nEmail: ${email}\nBest time to contact: ${bestTime}`
    window.location.href = `mailto:hello@viridiannetworkllc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setIsContactOpen(false)
  }

  return (
    <div className="page" id="top">
      <header className="nav">
        <div className="brand">
          <img className="brand__logo" src="/logo.png" alt="Viridian Network LLC logo" />
        </div>
        <nav className="nav__links">
          <a href="#outcomes">Outcomes</a>
          <a href="#work">What We Build</a>
          <a href="#expertise">Expertise</a>
          <a href="#engage">Engage</a>
          <button
            className="nav__link-button"
            type="button"
            onClick={() => setIsPortfolioOpen(true)}
          >
            Portfolio
          </button>
        </nav>
        <div className="nav__actions">
          <button
            className="button button--ghost"
            type="button"
            onClick={() => setIsConsultOpen(true)}
          >
            Start a Conversation
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero__content">
            <p className="eyebrow">Network-first systems for small businesses</p>
            <h1>
              <span>Everything Is a Network.</span>
              <span>We Design What Connects.</span>
            </h1>
            <p className="hero__lead">
              Viridian Network LLC helps small businesses organize communication, automate lead handling,
              and connect the systems their operations depend on.
            </p>
            <p className="hero__body">
              Most businesses do not fail because of one bad tool. They lose momentum when websites,
              inboxes, CRMs, people, workflows, and follow-up systems stop communicating clearly.
            </p>
            <p className="hero__body">
              We map the system, identify the weak connections, then build practical infrastructure that
              makes the business easier to run, maintain, and scale.
            </p>
            <div className="hero__actions">
              <button className="button button--primary" type="button" onClick={() => setIsConsultOpen(true)}>
                Book a System Review
              </button>
              <a className="button button--outline" href="#work">See What We Build</a>
            </div>
            <div className="hero__note">Layer 1 through Layer 7. One way of thinking.</div>
          </div>
          <div className="hero__panel">
            <div className="hero__card">
              <p className="hero__card-title">Business systems break when connections are unclear.</p>
              <div className="hero__card-grid">
                <div>
                  <p className="hero__card-label">Leads</p>
                  <p>Capture, route, and follow up before opportunities go cold.</p>
                </div>
                <div>
                  <p className="hero__card-label">Workflows</p>
                  <p>Replace scattered manual steps with repeatable operating systems.</p>
                </div>
                <div>
                  <p className="hero__card-label">Automation</p>
                  <p>Connect forms, messages, CRM stages, reminders, and reporting.</p>
                </div>
                <div>
                  <p className="hero__card-label">Infrastructure</p>
                  <p>Design systems that are understandable, secure, and easier to maintain.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="outcomes" id="outcomes">
          <div className="outcomes__intro">
            <p className="eyebrow">Where Viridian Creates Clarity</p>
            <h2>We turn disconnected operations into connected systems.</h2>
          </div>
          <div className="outcome-grid">
            <article>
              <h3>Lead Handling</h3>
              <p>Forms, calls, messages, and inquiries routed into a clear follow-up process.</p>
            </article>
            <article>
              <h3>Workflow Automation</h3>
              <p>Manual business tasks connected through automations, triggers, and reminders.</p>
            </article>
            <article>
              <h3>Web Infrastructure</h3>
              <p>Modern websites that explain the offer, capture demand, and connect to operations.</p>
            </article>
            <article>
              <h3>System Clarity</h3>
              <p>Architecture maps that show how people, data, services, and tools interact.</p>
            </article>
          </div>
        </section>

        <section className="section philosophy" id="philosophy">
          <div className="section__intro">
            <p className="eyebrow">Philosophy</p>
            <h2>Failure is rarely singular. It&apos;s systemic.</h2>
            <p>
              When something breaks, it&apos;s tempting to blame a server, a line of code, a website, or a person.
              But most failures are the result of strained, unclear, or neglected connections.
            </p>
            <p>We approach technology differently. We ask:</p>
          </div>
          <div className="section__content">
            <ul className="question-list">
              <li>What is connected?</li>
              <li>What is communicating?</li>
              <li>What is assumed but never defined?</li>
              <li>Where does the system quietly break under pressure?</li>
            </ul>
            <p className="section__closing">Understanding the network reveals the truth of the system.</p>
          </div>
        </section>

        <section className="section work" id="work">
          <div className="section__intro">
            <p className="eyebrow">What We Build</p>
            <h2>Practical systems before complicated software.</h2>
            <p>
              We help startups and small businesses move from improvised tools to intentional operating systems.
            </p>
          </div>
          <div className="section__content">
            <ul className="focus-list">
              <li>Business websites connected to contact forms, lead capture, and scheduling</li>
              <li>CRM pipelines for tracking prospects, customers, projects, and follow-up</li>
              <li>Automation workflows that move information between apps and teams</li>
              <li>AI-assisted communication systems for intake, routing, and response support</li>
              <li>Architecture reviews that expose bottlenecks, gaps, and structural risks</li>
            </ul>
            <p className="section__closing">
              The goal is not more tools. The goal is a business that communicates clearly with itself.
            </p>
          </div>
        </section>

        <section className="section expertise" id="expertise">
          <div className="section__intro">
            <p className="eyebrow">Network-First Expertise</p>
            <h2>Architecture across every layer.</h2>
            <p>
              From devices and connectivity to applications and customer experience, we look at the full system.
            </p>
          </div>
          <div className="section__content">
            <div className="layer-grid">
              <article>
                <h3>Layers 1-2</h3>
                <p>Physical systems, devices, cabling, access points, and local connectivity.</p>
              </article>
              <article>
                <h3>Layers 3-4</h3>
                <p>Routing, traffic flow, reliability, performance, and service availability.</p>
              </article>
              <article>
                <h3>Layers 5-6</h3>
                <p>Sessions, encryption, data formats, integrations, and transport behavior.</p>
              </article>
              <article>
                <h3>Layer 7</h3>
                <p>Websites, applications, APIs, workflows, automations, and user experience.</p>
              </article>
            </div>
            <div className="benefit-card">
              <p>This layered understanding helps us design systems that are:</p>
              <ul>
                <li>Resilient instead of fragile</li>
                <li>Secure by intention, not accident</li>
                <li>Understandable to the people who maintain them</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section serve" id="serve">
          <div className="section__intro">
            <p className="eyebrow">Who We Serve</p>
            <h2>Built for operators who are outgrowing scattered systems.</h2>
            <p>Viridian is a strong fit for:</p>
          </div>
          <div className="section__content">
            <ul className="focus-list">
              <li>Local service businesses losing leads through slow or inconsistent follow-up</li>
              <li>Founders who need a clear technical foundation before scaling</li>
              <li>Small teams using too many disconnected tools</li>
              <li>Businesses that need websites, workflows, and automation to work together</li>
            </ul>
            <p className="section__closing">
              If your technology feels brittle, opaque, or overly complex, it&apos;s usually not only a tooling issue.
              It&apos;s a network issue.
            </p>
          </div>
        </section>

        <section className="section engage" id="engage">
          <div className="section__intro">
            <p className="eyebrow">How You Engage</p>
            <h2>Start by understanding the system.</h2>
            <p>Most engagements begin with a focused system review.</p>
          </div>
          <div className="section__content">
            <div className="engage-steps">
              <div>
                <p className="step-title">1. Map the current system</p>
                <p>We identify the website, tools, people, data, workflows, and communication paths involved.</p>
              </div>
              <div>
                <p className="step-title">2. Find the weak connections</p>
                <p>We look for missed leads, manual bottlenecks, unclear ownership, and fragile technical decisions.</p>
              </div>
              <div>
                <p className="step-title">3. Build the path forward</p>
                <p>You receive a practical plan for automation, web infrastructure, workflow cleanup, or implementation.</p>
              </div>
            </div>
            <div className="engage-actions">
              <button
                className="button button--primary"
                type="button"
                onClick={() => setIsConsultOpen(true)}
              >
                Book a System Review
              </button>
              <button
                className="button button--outline"
                type="button"
                onClick={() => setIsContactOpen(true)}
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>

        <section className="section close">
          <div className="close__card">
            <p className="eyebrow">Brand Close</p>
            <h2>Strong systems aren&apos;t louder. They&apos;re clearer.</h2>
            <p>
              When connections are intentional, systems scale naturally. When communication is designed, complexity
              becomes manageable.
            </p>
            <p className="close__signature">Everything is a network. We design what connects.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; Viridian Network LLC -- network-first infrastructure, automation, architecture, and clarity.</p>
      </footer>

      {isConsultOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Book a system review">
          <div
            className="modal__backdrop"
            onClick={() => setIsConsultOpen(false)}
            role="button"
            tabIndex={0}
          ></div>
          <div className="modal__panel">
            <div className="modal__header">
              <div>
                <p className="eyebrow">Book a System Review</p>
                <h3>Tell us what needs to connect.</h3>
              </div>
              <button
                className="modal__close"
                type="button"
                onClick={() => setIsConsultOpen(false)}
                aria-label="Close"
              >
                X
              </button>
            </div>
            <form className="form" onSubmit={handleConsultSubmit}>
              <div className="form__row">
                <label className="form__label" htmlFor="consult-name">Name</label>
                <input className="form__control" id="consult-name" name="name" type="text" required />
              </div>
              <div className="form__row">
                <label className="form__label" htmlFor="consult-email">Email</label>
                <input className="form__control" id="consult-email" name="email" type="email" required />
              </div>
              <div className="form__row">
                <label className="form__label" htmlFor="consult-business">Business / project name</label>
                <input className="form__control" id="consult-business" name="business" type="text" />
              </div>
              <div className="form__row">
                <label className="form__label" htmlFor="consult-message">What feels disconnected?</label>
                <textarea className="form__control" id="consult-message" name="message" rows="5" required></textarea>
              </div>
              <div className="form__actions">
                <button className="button button--outline" type="button" onClick={() => setIsConsultOpen(false)}>
                  Cancel
                </button>
                <button className="button button--primary" type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isContactOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Contact us">
          <div
            className="modal__backdrop"
            onClick={() => setIsContactOpen(false)}
            role="button"
            tabIndex={0}
          ></div>
          <div className="modal__panel">
            <div className="modal__header">
              <div>
                <p className="eyebrow">Contact Us</p>
                <h3>Share your details.</h3>
              </div>
              <button
                className="modal__close"
                type="button"
                onClick={() => setIsContactOpen(false)}
                aria-label="Close"
              >
                X
              </button>
            </div>
            <form className="form" onSubmit={handleContactSubmit}>
              <div className="form__row">
                <label className="form__label" htmlFor="contact-name">Name</label>
                <input className="form__control" id="contact-name" name="name" type="text" required />
              </div>
              <div className="form__row">
                <label className="form__label" htmlFor="contact-email">Email</label>
                <input className="form__control" id="contact-email" name="email" type="email" required />
              </div>
              <div className="form__row">
                <label className="form__label" htmlFor="contact-best-time">Best time to contact you</label>
                <select className="form__control" id="contact-best-time" name="bestTime" required>
                  <option value="">Select one</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="Weekends">Weekends</option>
                  <option value="Anytime">Anytime</option>
                </select>
              </div>
              <div className="form__actions">
                <button className="button button--outline" type="button" onClick={() => setIsContactOpen(false)}>
                  Cancel
                </button>
                <button className="button button--primary" type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isPortfolioOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Portfolio">
          <div
            className="modal__backdrop"
            onClick={() => setIsPortfolioOpen(false)}
            role="button"
            tabIndex={0}
          ></div>
          <div className="modal__panel modal__panel--wide">
            <div className="modal__header">
              <div>
                <p className="eyebrow">Portfolio</p>
                <h3>Projects and prototypes.</h3>
              </div>
              <button
                className="modal__close"
                type="button"
                onClick={() => setIsPortfolioOpen(false)}
                aria-label="Close"
              >
                X
              </button>
            </div>
            <div className="portfolio-grid">
              <article className="portfolio-card">
                <h4>Movie Match Night</h4>
                <p>A decision-support web app that helps users choose what to watch when options become overwhelming.</p>
                <a href="https://moviematchnight.com" target="_blank" rel="noreferrer">
                  Visit moviematchnight.com
                </a>
              </article>
              <article className="portfolio-card">
                <h4>Unfiltered QA</h4>
                <p>A marketplace concept focused on clearer questions, stronger buyer intent, and less wasted time.</p>
                <a href="https://unfilteredqa.com" target="_blank" rel="noreferrer">
                  Visit unfilteredqa.com
                </a>
              </article>
              <article className="portfolio-card">
                <h4>Signal Field Companion</h4>
                <p>A digital toolbox concept for 25-series signal tasks, field support, and technical reference workflows.</p>
                <a href="https://signalfieldcompanion.com" target="_blank" rel="noreferrer">
                  Visit signalfieldcompanion.com
                </a>
              </article>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
