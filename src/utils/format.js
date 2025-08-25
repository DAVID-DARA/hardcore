// src/utils/format.js
const DEFAULT_CURRENCY = import.meta.env.VITE_CURRENCY || "NGN";
const DEFAULT_LOCALE = import.meta.env.VITE_LOCALE || "en-NG";

/**
 * Safe currency formatter.
 * Accepts number or numeric string; returns formatted string or "—".
 */
export function formatPrice(
  value,
  { currency = DEFAULT_CURRENCY, locale = DEFAULT_LOCALE } = {}
) {
  const n = typeof value === "string" ? Number(value) : value;
  if (typeof n !== "number" || Number.isNaN(n)) return "—";
  try {
    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(n);
  } catch {
    // Fallback if Intl fails (bad locale/currency)
    return `${currency} ${n.toFixed(2)}`;
  }
}

/** Plain number with thousands separators. */
export function formatNumber(value, { locale = DEFAULT_LOCALE } = {}) {
  const n = typeof value === "string" ? Number(value) : value;
  if (typeof n !== "number" || Number.isNaN(n)) return "—";
  try {
    return new Intl.NumberFormat(locale).format(n);
  } catch {
    return String(n);
  }
}

/** Convert major units to minor units (e.g., Naira → Kobo). */
export function toMinorUnits(value) {
  const n = typeof value === "string" ? Number(value) : value;
  if (typeof n !== "number" || Number.isNaN(n)) return 0;
  return Math.round(n * 100);
}
