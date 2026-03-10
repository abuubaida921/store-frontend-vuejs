<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <AppHeader />
    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>
