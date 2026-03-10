import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useApiWithFallback } from '@/composables/useApiWithFallback'
import { getBanners } from '@/services/bannerService'
import { isValidBannerResponse } from '@/utils/validators'

export const useBannersStore = defineStore('banners', () => {
  const list = ref([])
  const loading = ref(false)

  const slides = computed(() => list.value)

  async function fetchBanners() {
    loading.value = true
    try {
      const data = await useApiWithFallback(
        () => getBanners(),
        'banners.json',
        isValidBannerResponse
      )
      const raw = Array.isArray(data) ? data : data?.data ?? data?.slides ?? []
      list.value = raw
    } finally {
      loading.value = false
    }
  }

  return { list, loading, slides, fetchBanners }
})
