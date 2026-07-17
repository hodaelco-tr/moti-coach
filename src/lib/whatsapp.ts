/** Same pattern Cal uses: bare wa.me + digits only, no prefilled text. */
export const PHONE_E164 = '972549189411'
export const PHONE_DISPLAY = '054-918-9411'

/** https://wa.me/972549189411 — identical style to cal-online.co.il */
export function getWhatsAppUrl() {
  return `https://wa.me/${PHONE_E164}`
}

export function getWhatsAppWebUrl() {
  return getWhatsAppUrl()
}
