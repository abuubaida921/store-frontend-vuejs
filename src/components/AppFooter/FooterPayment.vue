<script setup>
const partners = [
  'Islami Bank',
  'Dutch-Bangla Bank',
  'Uttara Bank',
  'South Bank',
  'Agrani Bank',
  'AB Bank',
  'Nagad',
  'bKash',
  'Rocket',
  'DBBL',
]
</script>

<template>
  <div class="border-t border-gray-600">
    <div class="container mx-auto px-4 py-6">
      <p class="font-bold text-white text-sm uppercase mb-4">Payment Partner</p>
      <div class="flex flex-wrap gap-3">
        <div
          v-for="p in partners"
          :key="p"
          class="px-4 py-2 rounded bg-white/10 text-gray-300 text-xs font-medium"
        >
          {{ p }}
        </div>
      </div>
    </div>
  </div>
</template>
