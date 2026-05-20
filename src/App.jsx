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
    const message = formData.get('message')?.toString().trim() || 'Not provided'
    const subject = 'Consultation request'
    const body = `Name: ${name}\nEmail: ${email}\n\nWhat they need:\n${message}`
    window.location.href = `mailto:hello@viridiannetworkllc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setIsConsultOpen(false)
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const name = formData.get('name')?.toString().trim() || 'Not provided'
    const email = formData.get('email')?.toString().trim() || 'Not provided'
    const bestTime = formData.get('bestTime')?.toString().trim() || 'Not provided'
    const subject = 'Contact request'
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
          <a href="#philosophy">Philosophy</a>
          <a href="#work">What We Do</a>
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
            <p className="eyebrow">HOMEPAGE</p>
            <h1>
              <span>Everything Is a Network.</span>
              <span>We Design What Connects.</span>
            </h1>
            <p className="hero__lead">Nothing works in isolation.</p>
            <p className="hero__body">
              Software, infrastructure, businesses -- they succeed or fail based on how well their parts
              communicate. We are a network-first technology consultancy, built on the belief that strong
              systems emerge from clear, intentional connections.
            </p>
            <p className="hero__body">
              From physical infrastructure to application logic, we design technology as a living network, not
              a pile of tools.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#engage">Start a Conversation</a>
            </div>
            <div className="hero__note">Layer 1 through Layer 7. One way of thinking.</div>
          </div>
          <div className="hero__panel">
            <div className="hero__card">
              <p className="hero__card-title">Nothing is singular. Everything is connected.</p>
              <div className="hero__card-grid">
                <div>
                  <p className="hero__card-label">Signal</p>
                  <p>Communication defines performance.</p>
                </div>
                <div>
                  <p className="hero__card-label">Structure</p>
                  <p>Architecture shapes outcomes.</p>
                </div>
                <div>
                  <p className="hero__card-label">Intent</p>
                  <p>Clarity becomes resilience.</p>
                </div>
                <div>
                  <p className="hero__card-label">Continuity</p>
                  <p>Systems endure when connections hold.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section philosophy" id="philosophy">
          <div className="section__intro">
            <p className="eyebrow">Philosophy</p>
            <h2>Failure is rarely singular. It&apos;s systemic.</h2>
            <p>
              When something breaks, it&apos;s tempting to blame a server, a line of code, or a person.
              But most failures are not isolated -- they&apos;re the result of strained, unclear, or neglected
              connections.
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
            <p className="eyebrow">What You Do</p>
            <h2>We don&apos;t rush to solutions. We map reality.</h2>
            <p>Our work begins before implementation.</p>
            <p>We help startups and small businesses:</p>
          </div>
          <div className="section__content">
            <ul className="focus-list">
              <li>See their technology as a whole</li>
              <li>Understand how data, services, and users interact</li>
              <li>Identify invisible bottlenecks and structural risks</li>
              <li>Make architectural decisions that won&apos;t collapse under growth</li>
            </ul>
            <p className="section__closing">
              Our role is to bring clarity to complexity -- then design systems that remain coherent as they scale.
            </p>
          </div>
        </section>

        <section className="section expertise" id="expertise">
          <div className="section__intro">
            <p className="eyebrow">Network-First Expertise</p>
            <h2>Architecture across every layer.</h2>
            <p>We design with a full-stack network perspective, spanning all seven layers of the OSI model:</p>
          </div>
          <div className="section__content">
            <div className="layer-grid">
              <article>
                <h3>Layers 1-2</h3>
                <p>Physical systems, devices, and connectivity.</p>
              </article>
              <article>
                <h3>Layers 3-4</h3>
                <p>Routing, traffic flow, performance, and reliability.</p>
              </article>
              <article>
                <h3>Layers 5-6</h3>
                <p>Sessions, data formats, encryption, transport behavior.</p>
              </article>
              <article>
                <h3>Layer 7</h3>
                <p>Applications, APIs, services, and user experience.</p>
              </article>
            </div>
            <div className="benefit-card">
              <p>This layered understanding allows us to design systems that are:</p>
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
            <p className="eyebrow">Who You Serve</p>
            <h2>Built for those who are still shaping their systems.</h2>
            <p>We work best with:</p>
          </div>
          <div className="section__content">
            <ul className="focus-list">
              <li>Startups defining their technical foundation</li>
              <li>Small businesses outgrowing improvised solutions</li>
              <li>Founders who want to understand why things work</li>
              <li>Teams that value structure over shortcuts</li>
            </ul>
            <p className="section__closing">
              If your technology feels brittle, opaque, or overly complex, it&apos;s usually not a tooling issue --
              it&apos;s a network issue.
            </p>
          </div>
        </section>

        <section className="section engage" id="engage">
          <div className="section__intro">
            <p className="eyebrow">How You Engage</p>
            <h2>Start by understanding the system.</h2>
            <p>Most engagements begin with:</p>
          </div>
          <div className="section__content">
            <div className="engage-steps">
              <div>
                <p className="step-title">A system and architecture review</p>
                <p>A clear map of how components interact.</p>
              </div>
              <div>
                <p className="step-title">Identification of risks, gaps, and bottlenecks</p>
                <p>A network-aligned path forward.</p>
              </div>
              <div>
                <p className="step-title">We meet you where you are</p>
                <p>Planning, building, or stabilizing.</p>
              </div>
            </div>
            <div className="engage-actions">
              <button
                className="button button--primary"
                type="button"
                onClick={() => setIsConsultOpen(true)}
              >
                Book a Consultation
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
        <p>&copy; Viridian Network LLC -- network-first infrastructure, architecture, and clarity.</p>
      </footer>

      {isConsultOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Book a consultation">
          <div
            className="modal__backdrop"
            onClick={() => setIsConsultOpen(false)}
            role="button"
            tabIndex={0}
          ></div>
          <div className="modal__panel">
            <div className="modal__header">
              <div>
                <p className="eyebrow">Book a Consultation</p>
                <h3>Tell us what you need.</h3>
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
                <label className="form__label" htmlFor="consult-message">What do you need?</label>
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
                <h3>Projects we have shipped.</h3>
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
                <p>This website helps users choose movies when they cant figure out what to watch.</p>
                <a href="https://moviematchnight.com" target="_blank" rel="noreferrer">
                  Visit moviematchnight.com
                </a>
              </article>
              <article className="portfolio-card">
                <h4>Unfiltered QA</h4>
                <p>
                  This website removes tire kickers and time wasters from the process of online shopping,
                  its like craigslist forum and facebook marketplace put together.
                </p>
                <a href="https://unfilteredqa.com" target="_blank" rel="noreferrer">
                  Visit unfilteredqa.com
                </a>
              </article>
              <article className="portfolio-card">
                <h4>Signal Field Companion</h4>
                <p>This is loke a digital toolbox that helps soldiers in the 25 series mos do tasks.</p>
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
