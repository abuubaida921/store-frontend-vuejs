<script setup>
const items = [
  { title: 'STORE LOCATOR', icon: 'location', text: 'Find our Stores' },
  { title: 'ONLINE ORDER', icon: 'phone', text: '01974-488389', text2: '01404433222' },
  { title: 'MULTIPLAN BRANCH', icon: 'phone', text: '01404433250' },
  { title: 'RMA & SERVICE', icon: 'phone', text: '01974-488327', text2: '01404433280' },
  { title: 'CORPORATE DEALS', icon: 'phone', text: '01974488312', text2: '01404433202' },
  { title: 'CHATTOGRAM BRANCH', icon: 'phone', text: '01974488314', text2: '01404433260' },
]
</script>

<template>
  <div class="border-b border-gray-600">
    <div class="container mx-auto px-4 py-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="flex items-start gap-3 p-4 rounded border border-gray-600 bg-gray-800/50"
        >
          <span v-if="item.icon === 'location'" class="shrink-0 text-gray-400 mt-0.5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <span v-else class="shrink-0 text-gray-400 mt-0.5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          <div>
            <p class="font-bold text-white text-sm">{{ item.title }}</p>
            <p class="text-gray-400 text-sm mt-0.5">{{ item.text }}</p>
            <p v-if="item.text2" class="text-gray-400 text-sm">{{ item.text2 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
