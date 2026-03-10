import { ref, watch } from 'vue'
import { useApiWithFallback } from './useApiWithFallback'
import { getProducts } from '@/services/productService'
import { isValidProductResponse } from '@/utils/validators'

export function useRelatedProducts(categoryRef, excludeIdRef) {
  const products = ref([])
  const loading = ref(false)

  async function fetchRelated(category, excludeId) {
    if (!category) {
      products.value = []
      return
    }
    loading.value = true
    try {
      const data = await useApiWithFallback(
        () => getProducts({ category }),
        'products.json',
        isValidProductResponse
      )
      const list = Array.isArray(data) ? data : data?.data ?? data?.items ?? []
      const exclude = excludeId != null ? String(excludeId) : null
      const cat = String(category).toLowerCase()
      products.value = list.filter(
        (p) => {
          const sameCategory = p.category && String(p.category).toLowerCase() === cat
          const notCurrent = String(p.id) !== exclude
          return sameCategory && notCurrent
        }
      )
    } catch (_) {
      products.value = []
    } finally {
      loading.value = false
    }
  }

  watch(
    () => [categoryRef?.value ?? categoryRef, excludeIdRef?.value ?? excludeIdRef],
    ([category, excludeId]) => fetchRelated(category, excludeId),
    { immediate: true }
  )

  return { products, loading, fetchRelated }
}
