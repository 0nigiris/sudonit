// Single source of truth for every contact action on the site.
// Primary = WhatsApp, Secondary = Email. NO contact form anywhere.
//
// FUTURE-PROOFING: when a Telegram bot / booking link is added, add it here once
// and it becomes available everywhere a contact button is rendered. Components
// must read from this file, never hardcode a number or address.

export interface ContactConfig {
  /** Primary action. WhatsApp number in international format, digits only. */
  whatsapp: {
    /** e.g. "34XXXXXXXXX" — placeholder until Alexander confirms the real number. */
    phone: string;
    /** Optional prefilled message; localized variants handled at call sites. */
    defaultMessage?: string;
  };
  /** Secondary action. */
  email: string;
  /** Public YouTube channel — the "follow along" heartbeat. */
  youtube: string;
  // telegram?: string;  // <- future: uncomment + fill, then expose a button.
  // bookingUrl?: string; // <- future: tutoring booking.
}

export const contact: ContactConfig = {
  whatsapp: {
    phone: '34691809846', // real WhatsApp (from the previous OniT site)
    defaultMessage: '',
  },
  email: 'fixkraftmine@gmail.com',
  youtube: 'https://youtube.com/@Sudo_0nigiri',
};

/** Build a wa.me link, optionally with a prefilled (already-encoded-safe) message. */
export function whatsappLink(message?: string): string {
  const msg = message ?? contact.whatsapp.defaultMessage;
  const base = `https://wa.me/${contact.whatsapp.phone}`;
  return msg ? `${base}?text=${encodeURIComponent(msg)}` : base;
}

/** Build a mailto link. */
export function emailLink(subject?: string): string {
  const base = `mailto:${contact.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}
