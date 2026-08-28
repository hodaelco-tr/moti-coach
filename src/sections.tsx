import { CtaButton } from './components/CtaButton'
import { WhatsAppButton } from './components/WhatsAppButton'
import { useReveal } from './hooks/useReveal'
import { PHONE_DISPLAY, PHONE_E164 } from './lib/whatsapp'

const TEL = `tel:+${PHONE_E164}`

export function Hero() {
  return (
    <header className="relative min-h-[100svh] overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=80')",
        }}
        role="img"
        aria-label="אימון כוח"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,10,10,0.88)_8%,rgba(10,10,10,0.55)_48%,rgba(10,10,10,0.35)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,77,0,0.28),transparent_45%)]" />

      <nav className="relative z-10 flex items-center justify-between px-4 py-5 sm:px-6 lg:px-10">
        <a href="#top" className="font-brand text-2xl font-extrabold tracking-[0.14em]">
          MOTI
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex">
          <a href="#about" className="transition-colors hover:text-white">
            עליי
          </a>
          <a href="#offer" className="transition-colors hover:text-white">
            האימון
          </a>
          <a href="#faq" className="transition-colors hover:text-white">
            שאלות
          </a>
        </div>
        <a
          href={TEL}
          className="hidden text-sm font-semibold tracking-wide text-white/70 transition-colors hover:text-white sm:inline"
          dir="ltr"
        >
          {PHONE_DISPLAY}
        </a>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-88px)] max-w-6xl flex-col justify-end px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
        <p
          className="animate-brand font-brand text-[clamp(4.5rem,18vw,11rem)] leading-[0.85] font-extrabold tracking-[0.08em] text-white"
          style={{ animationDelay: '0.05s' }}
        >
          MOTI
        </p>

        <div className="mt-4 h-1 w-28 origin-right bg-blaze animate-pulse-line sm:w-40" />

        <h1
          className="animate-rise mt-6 max-w-3xl font-display text-[clamp(1.85rem,5.2vw,3.6rem)] leading-[1.12] font-extrabold text-balance"
          style={{ animationDelay: '0.18s' }}
        >
          לא נולדים חזקים
        </h1>

        <p
          className="animate-rise mt-5 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl"
          style={{ animationDelay: '0.32s' }}
        >
          נזכר ברגעים היפים שלך — אנרגיה, כושר, כוח. תמיד רצית לחזור לזה, אבל…
          בדיוק עכשיו זה הזמן להשקיע בעצמך.
        </p>

        <div className="animate-rise mt-8" style={{ animationDelay: '0.45s' }}>
          <CtaButton href="#contact" className="min-w-[220px]">
            התחל במחירי היכרות
          </CtaButton>
        </div>

        <p
          className="animate-rise mt-5 text-sm text-white/65"
          style={{ animationDelay: '0.55s' }}
        >
          אימון אישי עד אליך · ירושלים והסביבה · אפשרות לקבלות
        </p>
      </div>
    </header>
  )
}

export function ProofBar() {
  const ref = useReveal<HTMLElement>()
  const items = [
    { value: '4', label: 'שנים באימון' },
    { value: 'וינגייט', label: 'בוגר בהצטיינות' },
    { value: '1:1', label: 'עד אליך' },
  ]

  return (
    <section
      ref={ref}
      className="reveal border-y border-line bg-white"
      aria-label="אמינות"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6 px-4 py-8 sm:px-6 lg:px-10">
        {items.map((item) => (
          <div key={item.label} className="text-center md:text-start">
            <p className="font-brand text-3xl font-extrabold tracking-wide text-ink sm:text-5xl">
              {item.value}
            </p>
            <p className="mt-1 text-sm font-medium text-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Method() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="method"
      ref={ref}
      className="reveal bg-ink px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold tracking-[0.18em] text-blaze uppercase">
          מכיר את זה?
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold text-balance sm:text-5xl">
          מתנשף במדרגות? קשה להרים קניות?
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
          היית רוצה לשנות את המצב? כל אחד יכול — בכל גיל ובכל מצב. גם 15 דקות
          זה משהו. זה הרבה. נשאר לך רק לרצות.
        </p>
        <div className="mt-10">
          <CtaButton href="#contact" variant="primary" className="min-w-[220px]">
            בוא נתחיל לעבוד
          </CtaButton>
        </div>
      </div>
    </section>
  )
}

export function Results() {
  const ref = useReveal<HTMLElement>()
  const benefits = [
    'יותר אנרגיה',
    'פחות עייפות',
    'פחות כאבי גב',
    'גב זקוף',
    'פחות כאבי ברכיים',
    'ירידה במשקל',
    'חיזוק השרירים',
    'גמישות',
  ]

  return (
    <section
      id="results"
      ref={ref}
      className="reveal bg-paper-deep px-4 py-16 sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold tracking-[0.18em] text-blaze uppercase">
          מה מרוויחים
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-balance sm:text-5xl">
          יתרונות שמרגישים ביום־יום
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          לא רק «להתאמן» — לחזור לאנרגיה, לתנועה ולאיכות חיים.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <li
              key={b}
              className="border border-line bg-white px-5 py-4 font-display text-lg font-bold text-ink"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Testimonials() {
  const ref = useReveal<HTMLElement>()
  const specialties = [
    'ילדים',
    'גיל שלישי',
    'פציעות ספורט',
    'פסיכולוגיה של הספורט',
  ]
  const experience = [
    'חדר כושר',
    'מאמן אישי',
    'קבוצות',
    'ילדים ומבוגרים',
    'צרכים מיוחדים',
    'תשושי נפש',
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="reveal bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold tracking-[0.18em] text-blaze uppercase">
          עליי
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold sm:text-5xl">
          היי, שמי מרדכי
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          בן 34, מאמן כושר. 4 שנים בתחום האימון — ומתאמן בעצמי כבר שנים רבות.
          סיימתי בהצטיינות כבוגר מכון וינגייט.
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          השליחות שלי: להחזיר למודעות בריאות ופעילות גופנית — מתוך חיבור והבנה.
          נהנה לעזור ולקדם באנושיות, אמפתיה, אכפתיות ורגישות, לעבר המטרה.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border border-line bg-paper p-6">
            <h3 className="font-display text-xl font-bold">השתלמויות</h3>
            <ul className="mt-4 space-y-2 text-muted">
              {specialties.map((s) => (
                <li key={s} className="flex gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-blaze" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line bg-paper p-6">
            <h3 className="font-display text-xl font-bold">ניסיון</h3>
            <ul className="mt-4 space-y-2 text-muted">
              {experience.map((s) => (
                <li key={s} className="flex gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-blaze" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">ובכלל — כל סוגי האימונים.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Plans() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="offer"
      ref={ref}
      className="reveal bg-ink px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold tracking-[0.18em] text-blaze uppercase">
          מה אני מציע
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold sm:text-5xl">
          אימון אישי — מגיע עד אליך
        </h2>
        <p className="mt-4 max-w-xl text-white/70">
          לבית, לפארק או לחדר כושר. אימון מותאם אישית, מקצועי — עם הנאה, אנרגיה
          והתקדמות. כולל אפיון הצורך שלך. אפשרות לקבלות.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="flex flex-col border border-blaze bg-blaze p-6 text-white">
            <p className="text-sm font-bold tracking-wide text-white/85">
              ההצעה החמה
            </p>
            <h3 className="mt-2 font-display text-3xl font-extrabold">
              חבילת 10 מפגשים
            </h3>
            <p className="mt-1 font-brand text-2xl font-bold tracking-wide">
              העשירי חינם
            </p>
            <ul className="mt-6 flex-1 space-y-3 text-sm sm:text-base">
              <li className="flex gap-2">
                <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-current" />
                מחירי היכרות להתחלה
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-current" />
                אימון אישי עד אליך
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-current" />
                מותאם למטרה ולמצב שלך
              </li>
            </ul>
            <CtaButton href="#contact" variant="secondary" className="mt-8 w-full">
              רוצה את החבילה
            </CtaButton>
          </article>

          <article className="flex flex-col border border-white/15 bg-white/[0.03] p-6">
            <p className="text-sm font-bold tracking-wide text-blaze">בונוס</p>
            <h3 className="mt-2 font-display text-3xl font-extrabold">
              חבר מביא חבר
            </h3>
            <p className="mt-4 flex-1 leading-relaxed text-white/70">
              מביאים חבר? שניכם נהנים. ספרו לי בשיחה ונדייק יחד את התנאים.
            </p>
            <p className="mt-6 text-sm text-white/55">
              האימונים באזור ירושלים והסביבה.
            </p>
            <CtaButton href="#contact" variant="primary" className="mt-8 w-full">
              לשאול על המבצע
            </CtaButton>
          </article>
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  const ref = useReveal<HTMLElement>()
  const items = [
    {
      q: 'זה מתאים גם אם אני לא בכושר בכלל?',
      a: 'כן. כל אחד יכול להתחיל — בכל גיל ובכל מצב. גם 15 דקות זה התחלה אמיתית.',
    },
    {
      q: 'איפה מתאמנים?',
      a: 'אני מגיע עד אליך — לבית, לפארק או לחדר כושר. באזור ירושלים והסביבה.',
    },
    {
      q: 'מה כולל האימון?',
      a: 'אפיון הצורך האישי שלך, תוכנית מותאמת, ליווי מקצועי — עם דגש על הנאה והתקדמות.',
    },
    {
      q: 'יש אפשרות לקבלות?',
      a: 'כן, אפשרות לקבלות.',
    },
  ]

  return (
    <section
      id="faq"
      ref={ref}
      className="reveal bg-paper px-4 py-16 sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold tracking-[0.18em] text-blaze uppercase">
          שאלות נפוצות
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">
          לפני שמתחילים
        </h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold sm:text-xl">
                {item.q}
                <span className="text-blaze transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCta() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="contact"
      ref={ref}
      className="reveal relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-10"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2200&q=80')",
        }}
        role="img"
        aria-label="ציוד כושר"
      />
      <div className="absolute inset-0 bg-ink/88" />

      <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
        <p className="font-brand text-5xl font-extrabold tracking-[0.12em] sm:text-7xl">
          MOTI
        </p>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-balance sm:text-5xl">
          לא היית רוצה חיים יותר איכותיים?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
          יותר אנרגיה, פחות מתח, פחות עייפות. רק צריך כוח רצון — ואפשר להתחיל
          במחירי היכרות.
        </p>

        <div className="mt-10 flex flex-col items-center gap-5">
          <WhatsAppButton className="min-w-[240px]">
            שלח הודעה למרדכי
          </WhatsAppButton>
          <a
            href={TEL}
            className="group inline-flex flex-col items-center gap-1 text-white/55 transition-colors hover:text-white"
          >
            <span className="text-xs font-medium tracking-[0.18em] uppercase">
              או התקשר
            </span>
            <span
              dir="ltr"
              className="font-brand text-2xl font-bold tracking-[0.08em] text-white underline decoration-blaze/70 decoration-2 underline-offset-8 group-hover:decoration-blaze"
            >
              {PHONE_DISPLAY}
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-white px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-brand text-2xl font-extrabold tracking-[0.12em]">MOTI</p>
        <a href={TEL} className="text-sm text-muted transition-colors hover:text-ink" dir="ltr">
          {PHONE_DISPLAY}
        </a>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} MOTI · מאמן אישי · ירושלים והסביבה
        </p>
      </div>
    </footer>
  )
}
