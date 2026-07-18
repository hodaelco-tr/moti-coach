import { AccessibilityMenu } from './components/AccessibilityMenu'
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

export default function App() {
  return (
    <div id="top">
      <AccessibilityMenu />
      <main id="main-content">
        <Hero />
        <ProofBar />
        <Method />
        <Results />
        <Testimonials />
        <Plans />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton variant="fab" />
    </div>
  )
}
