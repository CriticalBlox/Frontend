<script setup lang="ts">
import { ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

const emit = defineEmits<{
  search: [pseudo: string]
}>()

const search = ref('')

function submitSearch() {
  emit('search', search.value)
}
</script>

<template>
  <form
      @submit.prevent="submitSearch"
      class="w-full max-w-3xl mx-auto px-2 sm:px-0"
  >
    <div
        class="flex items-center gap-2 sm:gap-3 bg-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 shadow-lg"
    >
      <MagnifyingGlassIcon class="w-4 h-4 sm:w-5 sm:h-5 text-[#0e091d]/60 shrink-0" />

      <input
          v-model="search"
          type="text"
          placeholder="Search pseudo"
          class="flex-1 min-w-0 bg-transparent text-[#0e091d] text-xs sm:text-sm font-bold outline-none placeholder:text-[#0e091d]/50"
      />
    </div>
  </form>
</template>
