<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import AppFooter from '@/components/AppFooter/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <AppHeader />
    <main class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
