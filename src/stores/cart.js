import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const count = computed(() => items.value.reduce((sum, i) => sum + (i.quantity || 1), 0))

  function addItem(product, quantity = 1) {
    const existing = items.value.find((i) => i.id === product.id)
    if (existing) {
      existing.quantity += quantity
    } else {
      items.value.push({ ...product, quantity })
    }
  }

  function removeItem(productId) {
    items.value = items.value.filter((i) => i.id !== productId)
  }

  function clear() {
    items.value = []
  }

  return { items, count, addItem, removeItem, clear }
})
