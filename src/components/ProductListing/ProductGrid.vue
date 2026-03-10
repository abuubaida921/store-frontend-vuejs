<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  products: { type: Array, default: () => [] },
  loading: { type: Boolean, default: false },
})
</script>

<template>
  <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
    <div
      v-for="i in 8"
      :key="i"
      class="rounded-lg border border-gray-200 bg-white p-4 animate-pulse"
    >
      <div class="h-48 bg-gray-200 rounded mb-4" />
      <div class="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div class="h-4 bg-gray-200 rounded w-1/2 mb-4" />
      <div class="h-10 bg-gray-200 rounded" />
    </div>
  </div>
  <div
    v-else
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
  <p
    v-if="!loading && products.length === 0"
    class="text-center text-gray-500 py-12"
  >
    No products found.
  </p>
</template>
