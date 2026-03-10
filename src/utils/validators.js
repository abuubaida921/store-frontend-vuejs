/**
 * Response validators for API fallback logic.
 * Invalid: non-200, missing data, null/undefined, empty array where required.
 */

export function isValidListResponse(data) {
  if (data == null || typeof data !== 'object') return false
  const list = Array.isArray(data) ? data : data.data ?? data.items ?? data.list
  return Array.isArray(list) && list.length > 0
}

export function isValidProductResponse(data) {
  if (!isValidListResponse(data)) return false
  const list = Array.isArray(data) ? data : data.data ?? data.items ?? data.list
  const first = list[0]
  return first && (first.id != null || first.name != null) && (first.price != null || first.priceFormatted != null)
}

export function isValidBannerResponse(data) {
  if (data == null || typeof data !== 'object') return false
  const list = Array.isArray(data) ? data : data.data ?? data.slides ?? data.banners
  return Array.isArray(list) && list.length > 0
}

export function isValidCategoriesResponse(data) {
  return isValidListResponse(data)
}

export function isValidFiltersResponse(data) {
  if (data == null || typeof data !== 'object') return false
  return true
}
