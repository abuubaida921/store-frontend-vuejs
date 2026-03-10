<script setup>
import { onMounted, watch } from 'vue'
import { useProductsStore } from '@/stores/products'
import { useFiltersStore } from '@/stores/filters'
import ProductGridToolbar from './ProductGridToolbar.vue'
import ProductGrid from './ProductGrid.vue'

const productsStore = useProductsStore()
const filtersStore = useFiltersStore()

onMounted(() => {
  productsStore.fetchProducts()
})

watch(
  () => filtersStore.queryParams,
  () => productsStore.fetchProducts(),
  { deep: true }
)
</script>

<template>
  <div class="space-y-4">
    <ProductGridToolbar
      :sort-by="productsStore.sortBy"
      :per-page="productsStore.perPage"
      :total="productsStore.total"
      :loading="productsStore.loading"
      @update:sort-by="productsStore.setSort"
      @update:per-page="productsStore.setPerPage"
    />
    <ProductGrid
      :products="productsStore.products"
      :loading="productsStore.loading"
    />
  </div>
</template>
