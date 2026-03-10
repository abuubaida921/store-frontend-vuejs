<script setup>
import { computed } from 'vue'
import { useCategoryStore } from '@/stores/categories'

const categoryStore = useCategoryStore()
const categories = computed(() => categoryStore.list)

defineProps({
  isOpen: { type: Boolean, default: false },
})

const emit = defineEmits(['close'])
</script>

<template>
  <div class="relative">
    <button
      v-if="isOpen"
      type="button"
      class="fixed inset-0 z-10 bg-black/30 lg:hidden"
      aria-label="Close menu"
      @click="emit('close')"
    />
    <ul
      class="flex flex-wrap items-center gap-x-4 gap-y-2 py-3 text-sm font-medium lg:flex-row overflow-y-auto"
      :class="isOpen ? 'fixed left-0 top-0 z-20 h-full w-64 flex-col gap-4 bg-white p-4 pt-16 shadow-xl' : ''"
    >
      <li
        v-for="cat in categories"
        :key="cat"
        class="lg:inline"
      >
        <a
          :href="`#${cat.toLowerCase().replace(/\s+/g, '-')}`"
          class="block py-1 hover:underline lg:py-0"
          @click="emit('close')"
        >
          {{ cat }}
        </a>
      </li>
    </ul>
  </div>
</template>
