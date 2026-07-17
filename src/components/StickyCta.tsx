import { useEffect, useState } from 'react'
import { CtaButton } from './CtaButton'

export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 p-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <CtaButton className="w-full" href="#contact">
        קבע אימון היכרות
      </CtaButton>
    </div>
  )
}
