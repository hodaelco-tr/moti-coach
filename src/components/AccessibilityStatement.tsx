import { PHONE_DISPLAY, PHONE_E164, getWhatsAppUrl } from '../lib/whatsapp'

const TEL = `tel:+${PHONE_E164}`

/**
 * Israeli accessibility statement — standalone page.
 * Structure follows common IS 5568 / WCAG 2.0 AA statement expectations.
 */
export function AccessibilityStatementPage() {
  return (
    <div className="min-h-[100svh] bg-paper text-ink">
      <header className="border-b border-line bg-white px-4 py-5 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <a href="#top" className="font-brand text-2xl font-extrabold tracking-[0.14em]">
            MOTI
          </a>
          <a
            href="#top"
            className="text-sm font-bold text-ink underline decoration-blaze/50 underline-offset-4 hover:decoration-blaze"
          >
            חזרה לאתר
          </a>
        </div>
      </header>

      <main
        id="accessibility-statement"
        className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10"
        aria-labelledby="a11y-statement-title"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold tracking-[0.18em] text-blaze uppercase">
            נגישות
          </p>
          <h1
            id="a11y-statement-title"
            className="mt-3 font-display text-3xl font-extrabold sm:text-5xl"
          >
            הצהרת נגישות
          </h1>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              אתר MOTI (מאמן כושר אישי — מרדכי) פועל להנגשת המידע והשירותים
              הדיגיטליים לכלל הציבור, ובכלל זה אנשים עם מוגבלויות, בהתאם לחוק
              שוויון זכויות לאנשים עם מוגבלות ולתקנות הנגישות לשירותי אינטרנט.
            </p>

            <h2 className="font-display text-xl font-bold text-ink">רמת הנגישות</h2>
            <p>
              אנו פועלים להנגשת האתר בהתאם לעקרונות{' '}
              <strong>ת״י 5568</strong> ולהנחיות <strong>WCAG 2.0 ברמת AA</strong>.
              ההתאמות המפורטות למטה בוצעו באתר.
            </p>

            <h2 className="font-display text-xl font-bold text-ink">
              התאמות נגישות באתר
            </h2>
            <ul className="list-disc space-y-2 pe-5">
              <li>מבנה סמנטי, ניווט מקלדת וקישורי דילוג</li>
              <li>
                תפריט נגישות: הקראה בקול, הגדלת טקסט, ניגודיות גבוהה, גווני אפור,
                הדגשת קישורים, גופן קריא והפחתת אנימציות
              </li>
              <li>שיפור ניגודיות טקסט על רקעים כהים ובהירים</li>
              <li>תמונות רקע מסומנות כדקורטיביות לקוראי מסך</li>
              <li>כיבוד העדפת «הפחתת תנועה» במערכת ההפעלה</li>
              <li>תמיכה בעברית ו־RTL</li>
              <li>יצירת קשר בכתב (WhatsApp) ובטלפון</li>
            </ul>

            <h2 className="font-display text-xl font-bold text-ink">
              סביבות עבודה נפוצות
            </h2>
            <p>
              האתר מיועד לשימוש בדפדפנים עדכניים במחשב ובנייד (כגון Chrome, Safari,
              Firefox ו־Edge). מומלץ להשתמש בגרסה עדכנית של הדפדפן ובקורא מסך
              עדכני בעת הצורך.
            </p>

            <h2 className="font-display text-xl font-bold text-ink">מגבלות ידועות</h2>
            <p>
              ייתכן שחלק מתכנים חיצוניים (למשל תמונות מספקי צד־שלישי, או פתיחת
              WhatsApp באפליקציה חיצונית) אינם בשליטה מלאה של האתר. איכות ההקראה
              בקול תלויה בקולות המותקנים במכשיר ובדפדפן. אם נתקלתם בבעיה —
              נשמח לתקן.
            </p>

            <h2 className="font-display text-xl font-bold text-ink">
              רכז נגישות ופניות
            </h2>
            <p>
              רכז נגישות: <strong>מרדכי (MOTI)</strong>
              <br />
              טלפון:{' '}
              <a href={TEL} className="font-semibold text-ink underline" dir="ltr">
                {PHONE_DISPLAY}
              </a>
              <br />
              WhatsApp:{' '}
              <a href={getWhatsAppUrl()} className="font-semibold text-ink underline">
                שליחת הודעה
              </a>
            </p>
            <p>
              ניתן לפנות לדיווח על בעיית נגישות או לבקשת התאמה. נשתדל לחזור בהקדם,
              ובדרך כלל תוך עד <strong>5 ימי עסקים</strong>.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-line bg-white px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-brand text-xl font-extrabold tracking-[0.12em]">MOTI</p>
          <a href="#top" className="text-sm font-semibold text-ink underline underline-offset-4">
            חזרה לדף הבית
          </a>
        </div>
      </footer>
    </div>
  )
}
