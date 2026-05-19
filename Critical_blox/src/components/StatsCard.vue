<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import type {PlayerStats} from "@/models/stats.ts";


defineProps<{
  stats: PlayerStats
}>()
</script>

<template>
  <div
      class="w-full max-w-5xl mx-auto bg-black rounded-xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 shadow-2xl"
  >
    <div
        class="grid grid-cols-1 md:grid-cols-[260px_1fr] lg:grid-cols-[320px_1fr] gap-6 md:gap-8 items-center"
    >
      <div class="bg-white aspect-square w-full max-w-[220px] sm:max-w-[260px] md:max-w-none mx-auto flex items-center justify-center">
        <UserCircleIcon class="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 text-[#9da1a4]" />
      </div>

      <div
          class="flex flex-col gap-2 sm:gap-3 text-white font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center md:text-left"
      >
        <p class="wrap-break-word">
          Pseudo:
          <span class="text-[#f9c62c]">
            {{ stats.pseudo }}
          </span>
        </p>

        <p>Kills: {{ stats.kills }}</p>
        <p>Deaths: {{ stats.deaths }}</p>
        <p>Match_played: {{ stats.match_played }}</p>
        <p>Win_total: {{ stats.win_total }}</p>
        <p>Lose_total: {{ stats.lose_total }}</p>
      </div>
    </div>
  </div>
</template>
