const CURRENCY_SYMBOL = '৳'

export function formatPrice(value) {
  if (value == null || Number.isNaN(Number(value))) return `0${CURRENCY_SYMBOL}`
  const num = Number(value)
  return `${num.toLocaleString()}${CURRENCY_SYMBOL}`
}
