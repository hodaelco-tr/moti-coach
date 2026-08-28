import { useEffect, useId, useRef, useState } from 'react'

type Prefs = {
  fontScale: number
  contrast: boolean
  grayscale: boolean
  underlineLinks: boolean
  readableFont: boolean
  reduceMotion: boolean
}

const KEY = 'moti-a11y-simple'
const DEFAULT: Prefs = {
  fontScale: 1,
  contrast: false,
  grayscale: false,
  underlineLinks: false,
  readableFont: false,
  reduceMotion: false,
}

function apply(prefs: Prefs) {
  const root = document.documentElement
  root.style.setProperty('--a11y-font-scale', String(prefs.fontScale))
  root.classList.toggle('a11y-contrast', prefs.contrast)
  root.classList.toggle('a11y-grayscale', prefs.grayscale)
  root.classList.toggle('a11y-links', prefs.underlineLinks)
  root.classList.toggle('a11y-readable', prefs.readableFont)
  root.classList.toggle('a11y-motion', prefs.reduceMotion)
}

export function AccessibilityMenu() {
  const panelId = useId()
  const btnRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT)
  const [speaking, setSpeaking] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(true)

  useEffect(() => {
    setSpeechSupported('speechSynthesis' in window)
    return () => {
      window.speechSynthesis?.cancel()
    }
  }, [])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY)
      if (raw) {
        const loaded = { ...DEFAULT, ...JSON.parse(raw) }
        setPrefs(loaded)
        apply(loaded)
      }
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    apply(prefs)
    localStorage.setItem(KEY, JSON.stringify(prefs))
  }, [prefs])

  useEffect(() => {
    if (!open) return

    const panel = panelRef.current
    const focusables = panel?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )
    focusables?.[0]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        btnRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || !focusables?.length) return
      const list = Array.from(focusables)
      const first = list[0]
      const last = list[list.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node
      if (panelRef.current?.contains(t) || btnRef.current?.contains(t)) return
      setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  const update = (patch: Partial<Prefs>) =>
    setPrefs((p) => ({ ...p, ...patch }))

  const stopSpeech = () => {
    window.speechSynthesis?.cancel()
    setSpeaking(false)
  }

  const startSpeech = () => {
    if (!('speechSynthesis' in window)) return

    const main = document.getElementById('main-content')
    const text = (main?.innerText || document.body.innerText || '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 4500)

    if (!text) return

    window.speechSynthesis.cancel()
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = 'he-IL'
    utter.rate = 0.95

    const voices = window.speechSynthesis.getVoices()
    const hebrew =
      voices.find((v) => v.lang.toLowerCase().startsWith('he')) ||
      voices.find((v) => v.lang.toLowerCase().includes('he'))
    if (hebrew) utter.voice = hebrew

    utter.onend = () => setSpeaking(false)
    utter.onerror = () => setSpeaking(false)

    setSpeaking(true)
    window.speechSynthesis.speak(utter)
  }

  return (
    <div className="a11y-widget">
      <a href="#main-content" className="a11y-skip">
        דלג לתוכן
      </a>
      <a href="#accessibility-statement" className="a11y-skip a11y-skip-secondary">
        דלג להצהרת נגישות
      </a>

      <button
        ref={btnRef}
        type="button"
        className="a11y-fab"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="תפריט נגישות"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-7.5 7.25h4.1v11.5h2.3V14.5h2.2v6.25h2.3V9.25h4.1V7H4.5v2.25z" />
        </svg>
      </button>

      {open && (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="הגדרות נגישות"
          className="a11y-panel"
        >
          <div className="a11y-head">
            <strong>נגישות</strong>
            <button
              type="button"
              className="a11y-close"
              onClick={() => {
                setOpen(false)
                btnRef.current?.focus()
              }}
            >
              סגור
            </button>
          </div>

          <div className="a11y-speech">
            <p className="a11y-speech-label" id="a11y-speech-label">
              הקראה בקול
            </p>
            <p className="sr-only" aria-live="polite">
              {speaking ? 'ההקראה פעילה' : ''}
            </p>
            {speechSupported ? (
              <div className="a11y-font-btns" role="group" aria-labelledby="a11y-speech-label">
                <button
                  type="button"
                  className="a11y-speech-btn"
                  onClick={speaking ? stopSpeech : startSpeech}
                  aria-pressed={speaking}
                >
                  {speaking ? 'עצור הקראה' : 'הקרא את העמוד'}
                </button>
              </div>
            ) : (
              <p className="a11y-speech-note">הדפדפן לא תומך בהקראה</p>
            )}
          </div>

          <div className="a11y-item">
            <span>גודל טקסט</span>
            <div className="a11y-font-btns">
              <button
                type="button"
                aria-label="הקטן טקסט"
                onClick={() =>
                  update({
                    fontScale: Math.max(0.9, Number((prefs.fontScale - 0.1).toFixed(1))),
                  })
                }
              >
                א-
              </button>
              <button
                type="button"
                aria-label="הגדל טקסט"
                onClick={() =>
                  update({
                    fontScale: Math.min(1.5, Number((prefs.fontScale + 0.1).toFixed(1))),
                  })
                }
              >
                א+
              </button>
            </div>
          </div>

          <label className="a11y-item">
            <span>ניגודיות גבוהה</span>
            <input
              type="checkbox"
              checked={prefs.contrast}
              onChange={() => update({ contrast: !prefs.contrast })}
            />
          </label>
          <label className="a11y-item">
            <span>גווני אפור</span>
            <input
              type="checkbox"
              checked={prefs.grayscale}
              onChange={() => update({ grayscale: !prefs.grayscale })}
            />
          </label>
          <label className="a11y-item">
            <span>הדגשת קישורים</span>
            <input
              type="checkbox"
              checked={prefs.underlineLinks}
              onChange={() => update({ underlineLinks: !prefs.underlineLinks })}
            />
          </label>
          <label className="a11y-item">
            <span>גופן קריא</span>
            <input
              type="checkbox"
              checked={prefs.readableFont}
              onChange={() => update({ readableFont: !prefs.readableFont })}
            />
          </label>
          <label className="a11y-item">
            <span>הפחתת אנימציות</span>
            <input
              type="checkbox"
              checked={prefs.reduceMotion}
              onChange={() => update({ reduceMotion: !prefs.reduceMotion })}
            />
          </label>

          <button
            type="button"
            className="a11y-reset"
            onClick={() => {
              stopSpeech()
              setPrefs(DEFAULT)
            }}
          >
            איפוס
          </button>

          <a
            href="#accessibility-statement"
            className="a11y-statement-link"
            onClick={() => setOpen(false)}
          >
            להצהרת הנגישות
          </a>
        </div>
      )}
    </div>
  )
}
