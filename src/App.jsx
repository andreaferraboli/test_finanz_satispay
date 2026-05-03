import './App.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-finanz">Finanz</span>
        <span className="brand-x">×</span>
        <span className="brand-satispay">Satispay</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#features">Funzionalità</a></li>
        <li><a href="#how-it-works">Come funziona</a></li>
        <li><a href="#pricing">Prezzi</a></li>
        <li><a href="#cta" className="btn-nav">Inizia ora</a></li>
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">Nuovo servizio integrato</div>
        <h1>
          Gestisci le tue finanze,<br />
          paga con <span className="highlight">Satispay</span>
        </h1>
        <p className="hero-subtitle">
          Unisci il potere di Finanz per il controllo finanziario personale
          con la semplicità dei pagamenti Satispay. Tutto in un&apos;unica esperienza.
        </p>
        <div className="hero-actions">
          <a href="#cta" className="btn-primary">Inizia gratuitamente</a>
          <a href="#how-it-works" className="btn-secondary">Scopri di più →</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <strong>50K+</strong>
            <span>Utenti attivi</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>€2M+</strong>
            <span>Transazioni gestite</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>4.9★</strong>
            <span>Valutazione media</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="phone-mockup">
          <div className="phone-screen">
            <div className="app-header">
              <span className="app-balance-label">Saldo disponibile</span>
              <span className="app-balance">€ 1.284,50</span>
            </div>
            <div className="app-card">
              <div className="card-row">
                <span>🛒 Supermercato</span>
                <span className="amount-out">- €32,40</span>
              </div>
              <div className="card-row">
                <span>☕ Caffè</span>
                <span className="amount-out">- €1,50</span>
              </div>
              <div className="card-row">
                <span>💰 Stipendio</span>
                <span className="amount-in">+ €1.800,00</span>
              </div>
              <div className="card-row">
                <span>🚌 Trasporti</span>
                <span className="amount-out">- €22,00</span>
              </div>
            </div>
            <div className="app-pay-btn">
              <span>Paga con Satispay</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const FEATURES = [
  {
    icon: '📊',
    title: 'Analisi spese intelligente',
    description:
      'Visualizza e categorizza automaticamente ogni transazione Satispay nel tuo dashboard Finanz.',
  },
  {
    icon: '🎯',
    title: 'Budget personalizzati',
    description:
      'Imposta limiti di spesa per categoria e ricevi notifiche in tempo reale direttamente sull\'app.',
  },
  {
    icon: '🔒',
    title: 'Sicurezza avanzata',
    description:
      'I tuoi dati finanziari sono protetti con crittografia di livello bancario e autenticazione biometrica.',
  },
  {
    icon: '⚡',
    title: 'Pagamenti istantanei',
    description:
      'Paga in negozio, online o tra amici in pochi secondi grazie all\'integrazione nativa con Satispay.',
  },
  {
    icon: '📈',
    title: 'Report mensili',
    description:
      'Ricevi ogni mese un report dettagliato sulle tue abitudini di spesa e consigli per risparmiare.',
  },
  {
    icon: '🤝',
    title: 'Split delle spese',
    description:
      'Dividi facilmente le spese con amici e familiari e tieni traccia di chi deve cosa.',
  },
]

function Features() {
  return (
    <section className="features" id="features">
      <div className="section-header">
        <span className="section-tag">Funzionalità</span>
        <h2>Tutto ciò di cui hai bisogno</h2>
        <p>Finanz × Satispay ti offre strumenti potenti per prendere il controllo delle tue finanze.</p>
      </div>
      <div className="features-grid">
        {FEATURES.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const STEPS = [
  {
    number: '01',
    title: 'Crea il tuo account',
    description: 'Registrati gratuitamente con la tua email o accedi con il tuo profilo Satispay esistente.',
  },
  {
    number: '02',
    title: 'Collega Satispay',
    description: 'Connetti il tuo account Satispay in un click. I tuoi movimenti vengono importati automaticamente.',
  },
  {
    number: '03',
    title: 'Imposta i tuoi obiettivi',
    description: 'Definisci i tuoi obiettivi di risparmio e i budget per ogni categoria di spesa.',
  },
  {
    number: '04',
    title: 'Monitora e cresci',
    description: 'Tieni d\'occhio le tue finanze in tempo reale e raggiungi la libertà finanziaria.',
  },
]

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-header">
        <span className="section-tag">Come funziona</span>
        <h2>Inizia in 4 semplici passi</h2>
        <p>Configurare Finanz × Satispay richiede meno di 5 minuti.</p>
      </div>
      <div className="steps">
        {STEPS.map((step, i) => (
          <div className="step" key={step.number}>
            <div className="step-number">{step.number}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {i < STEPS.length - 1 && <div className="step-arrow">→</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

const PLANS = [
  {
    name: 'Free',
    price: '€0',
    period: '/ mese',
    description: 'Perfetto per iniziare',
    features: ['Fino a 50 transazioni/mese', 'Dashboard base', 'Categorizzazione automatica', 'App mobile'],
    cta: 'Inizia gratis',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '€4,99',
    period: '/ mese',
    description: 'Per chi vuole di più',
    features: ['Transazioni illimitate', 'Report avanzati', 'Budget illimitati', 'Split spese', 'Supporto prioritario'],
    cta: 'Prova 30 giorni gratis',
    highlighted: true,
  },
  {
    name: 'Family',
    price: '€9,99',
    period: '/ mese',
    description: 'Per tutta la famiglia',
    features: ['Tutto di Pro', 'Fino a 5 profili', 'Wallet condiviso', 'Controllo genitori', 'Obiettivi di famiglia'],
    cta: 'Scegli Family',
    highlighted: false,
  },
]

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="section-header">
        <span className="section-tag">Prezzi</span>
        <h2>Semplice e trasparente</h2>
        <p>Nessuna sorpresa. Scegli il piano più adatto a te.</p>
      </div>
      <div className="plans-grid">
        {PLANS.map((plan) => (
          <div className={`plan-card${plan.highlighted ? ' plan-highlighted' : ''}`} key={plan.name}>
            {plan.highlighted && <div className="plan-badge">Più scelto</div>}
            <div className="plan-name">{plan.name}</div>
            <div className="plan-price">
              <strong>{plan.price}</strong>
              <span>{plan.period}</span>
            </div>
            <div className="plan-desc">{plan.description}</div>
            <ul className="plan-features">
              {plan.features.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            <a href="#cta" className={plan.highlighted ? 'btn-primary' : 'btn-outline'}>{plan.cta}</a>
          </div>
        ))}
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-content">
        <h2>Pronto a prendere il controllo delle tue finanze?</h2>
        <p>Unisciti a oltre 50.000 persone che già usano Finanz × Satispay ogni giorno.</p>
        <div className="cta-actions">
          <a href="#" className="btn-primary btn-large">Crea account gratuito</a>
          <a href="#" className="btn-ghost">Scarica l&apos;app</a>
        </div>
        <p className="cta-note">Nessuna carta di credito richiesta · Cancella in qualsiasi momento</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="brand-finanz">Finanz</span>
          <span className="brand-x">×</span>
          <span className="brand-satispay">Satispay</span>
          <p>La tua app per gestire le finanze personali con i pagamenti Satispay.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Prodotto</h4>
            <a href="#">Funzionalità</a>
            <a href="#">Prezzi</a>
            <a href="#">Novità</a>
          </div>
          <div>
            <h4>Azienda</h4>
            <a href="#">Chi siamo</a>
            <a href="#">Blog</a>
            <a href="#">Lavora con noi</a>
          </div>
          <div>
            <h4>Supporto</h4>
            <a href="#">Centro assistenza</a>
            <a href="#">Contattaci</a>
            <a href="#">Status</a>
          </div>
          <div>
            <h4>Legale</h4>
            <a href="#">Privacy</a>
            <a href="#">Termini</a>
            <a href="#">Cookie</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 Finanz × Satispay. Tutti i diritti riservati.</span>
        <span>Made with ❤️ in Italy</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
