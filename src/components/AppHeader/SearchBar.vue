<script setup>
import { ref } from 'vue'

const query = ref('')

function onSubmit() {
  if (query.value.trim()) {
    // TODO: navigate to search or emit
  }
}
</script>

<template>
  <form class="w-full" @submit.prevent="onSubmit">
    <div class="relative">
      <input
        v-model="query"
        type="search"
        placeholder="Search..."
        class="w-full py-2 pl-4 pr-10 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-200 focus:ring-2 focus:ring-header-blue focus:border-transparent"
        aria-label="Search products"
      />
      <button
        type="submit"
        class="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-header-blue"
        aria-label="Search"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  </form>
</template>
