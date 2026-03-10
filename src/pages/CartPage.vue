<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold">Cart</h1>
    <p v-if="cartStore.count === 0" class="mt-4 text-gray-600">Your cart is empty.</p>
    <p v-else class="mt-4 text-gray-600">{{ cartStore.count }} item(s) in cart.</p>
  </div>
</template>
