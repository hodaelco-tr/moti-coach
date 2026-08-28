import { useEffect, useState } from 'react'
import { AccessibilityMenu } from './components/AccessibilityMenu'
import { AccessibilityStatementPage } from './components/AccessibilityStatement'
import { WhatsAppButton } from './components/WhatsAppButton'
import {
  Faq,
  FinalCta,
  Footer,
  Hero,
  Method,
  Plans,
  ProofBar,
  Results,
  Testimonials,
} from './sections'

function isA11yPage() {
  return window.location.hash === '#accessibility-statement'
}

export default function App() {
  const [showStatement, setShowStatement] = useState(isA11yPage)

  useEffect(() => {
    const sync = () => setShowStatement(isA11yPage())
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  useEffect(() => {
    if (showStatement) {
      window.scrollTo(0, 0)
      document.title = 'הצהרת נגישות | MOTI'
    } else {
      document.title = 'MOTI — מאמן כושר אישי | ירושלים'
    }
  }, [showStatement])

  if (showStatement) {
    return (
      <>
        <AccessibilityMenu />
        <AccessibilityStatementPage />
      </>
    )
  }

  return (
    <div id="top">
      <AccessibilityMenu />
      <main id="main-content">
        <Hero />

        <div className="chapter-ink">
          <ProofBar />
          <div className="chapter-divider" aria-hidden="true" />
          <Method />
          <div className="chapter-divider" aria-hidden="true" />
          <Results />
        </div>

        <div className="chapter-seam" aria-hidden="true" />

        <div className="chapter-paper">
          <Testimonials />
        </div>

        <div className="chapter-seam" aria-hidden="true" />

        <div className="chapter-ink">
          <Plans />
        </div>

        <div className="chapter-seam" aria-hidden="true" />

        <div className="chapter-paper">
          <Faq />
        </div>

        <div className="chapter-seam" aria-hidden="true" />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton variant="fab" />
    </div>
  )
}
