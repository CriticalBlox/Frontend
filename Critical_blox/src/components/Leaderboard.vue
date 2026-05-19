<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import { useLeaderboardStore } from '@/stores/leaderboardStore'

const leaderboardStore = useLeaderboardStore()

const currentPage = ref(1)
const hasNextPage = ref(true)
const pageSize = 10

async function loadLeaderboard() {
  await leaderboardStore.fetchLeaderboard(currentPage.value, pageSize)
  hasNextPage.value = leaderboardStore.players.length >= pageSize
}

onMounted(() => {
  loadLeaderboard()
})

async function nextPage() {
  if (!hasNextPage.value) return
  currentPage.value++
  await loadLeaderboard()
}

async function previousPage() {
  if (currentPage.value <= 1) return
  currentPage.value--
  await loadLeaderboard()
}

function getCardColor(index: number) {
  if (index === 0 && currentPage.value === 1) return 'bg-[#f9c62c]'
  if (index === 1 && currentPage.value === 1) return 'bg-[#c9c9cf]'
  if (index === 2 && currentPage.value === 1) return 'bg-[#dc7a00]'
  return 'bg-[#7b17bf]'
}

function getTextColor(index: number) {
  if (index <= 2 && currentPage.value === 1) return 'text-[#0e091d]'
  return 'text-white'
}

const players = computed(() => leaderboardStore.players)
</script>

<template>
  <div class="min-h-screen bg-[#090018] text-white font-mono px-3 sm:px-6 py-6 sm:py-8">
    <div class="w-full max-w-5xl mx-auto">

      <div class="flex items-center justify-between gap-3 mb-6 sm:mb-8">
        <button
            @click="previousPage"
            :disabled="currentPage <= 1"
            class="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-full bg-[#120024] flex items-center justify-center hover:bg-[#1a0035] transition disabled:opacity-30 cursor-pointer"
        >
          <ChevronLeftIcon class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </button>

        <div class="text-center min-w-0">
          <h1 class="text-2xl sm:text-4xl font-black text-[#f9c62c]">
            LeaderBoard
          </h1>

          <p class="text-white font-bold text-sm sm:text-xl mt-2">
            Classement des meilleurs joueurs !
          </p>

          <p class="text-white/50 text-xs sm:text-sm mt-2">
            Page {{ currentPage }}
          </p>
        </div>

        <button
            @click="nextPage"
            :disabled="!hasNextPage"
            class="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-full bg-[#120024] flex items-center justify-center hover:bg-[#1a0035] transition disabled:opacity-30 cursor-pointer"
        >
          <ChevronRightIcon class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </button>
      </div>

      <div class="grid grid-cols-5 gap-1 px-3 sm:px-8 mb-3 sm:mb-4 text-[#7f7b88] font-black text-xs sm:text-xl md:text-2xl">
        <div>Top</div>
        <div>Pseudo</div>
        <div>Kills</div>
        <div>Deaths</div>
        <div>Wins</div>
      </div>

      <div
          v-if="leaderboardStore.loading"
          class="text-center text-white/70 text-lg sm:text-xl mt-10"
      >
        Chargement...
      </div>

      <div v-else class="flex flex-col gap-3 sm:gap-4">
        <div
            v-for="(player, index) in players"
            :key="player.pseudo"
            :class="[getCardColor(index), getTextColor(index)]"
            class="rounded-xl sm:rounded-2xl px-3 sm:px-8 py-4 sm:py-6 grid grid-cols-5 gap-1 items-center font-black text-xs sm:text-xl md:text-2xl shadow-lg"
        >
          <div>
            #{{ ((currentPage - 1) * pageSize) + index + 1 }}
          </div>

          <div class="truncate">
            {{ player.pseudo }}
          </div>

          <div>
            {{ player.kills }}
          </div>

          <div>
            {{ player.deaths }}
          </div>

          <div>
            {{ player.win_total }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
