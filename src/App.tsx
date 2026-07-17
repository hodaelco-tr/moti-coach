import { StickyCta } from './components/StickyCta'
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
    <div id="top" className="pb-20 md:pb-0">
      <Hero />
      <ProofBar />
      <Method />
      <Results />
      <Testimonials />
      <Plans />
      <Faq />
      <FinalCta />
      <Footer />
      <StickyCta />
    </div>
  )
}
