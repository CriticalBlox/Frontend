<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

import { useGameStore } from '@/stores/gameStore'

const gameStore = useGameStore()

const currentPage = ref(1)
const pageSize = 5
const hasNextPage = ref(true)

async function loadGames() {
  await gameStore.fetchGames(currentPage.value, pageSize)

  hasNextPage.value = gameStore.games.length >= pageSize
}

onMounted(() => {
  loadGames()
})

async function previousPage() {
  if (currentPage.value <= 1) return

  currentPage.value--
  await loadGames()
}

async function nextPage() {
  if (!hasNextPage.value) return

  currentPage.value++
  await loadGames()
}
</script>

<template>
  <div class="min-h-screen bg-[#090018] text-white font-mono px-4 sm:px-8 py-8">
    <div class="w-full max-w-6xl mx-auto">

      <!-- Title -->
      <div class="mb-8">
        <h1 class="text-3xl sm:text-4xl font-black text-[#f9c62c]">
          Game
        </h1>

        <p class="text-white font-bold text-lg sm:text-xl mt-2">
          Listes des games
        </p>
      </div>

      <!-- Pagination -->
      <div class="flex items-center justify-between mb-8">
        <button
            @click="previousPage"
            :disabled="currentPage <= 1"
            class="w-12 h-12 rounded-full bg-[#120024] flex items-center justify-center hover:bg-[#1a0035] transition disabled:opacity-30 cursor-pointer"
        >
          <ChevronLeftIcon class="w-7 h-7 text-white" />
        </button>

        <p class="text-white/60 font-bold">
          Page {{ currentPage }}
        </p>

        <button
            @click="nextPage"
            :disabled="!hasNextPage"
            class="w-12 h-12 rounded-full bg-[#120024] flex items-center justify-center hover:bg-[#1a0035] transition disabled:opacity-30 cursor-pointer"
        >
          <ChevronRightIcon class="w-7 h-7 text-white" />
        </button>
      </div>

      <!-- Error -->
      <p
          v-if="gameStore.errorMessage"
          class="text-red-400 font-bold mb-6"
      >
        {{ gameStore.errorMessage }}
      </p>

      <!-- Loading -->
      <div
          v-if="gameStore.loading"
          class="text-white/70 text-xl font-bold"
      >
        Chargement...
      </div>

      <!-- Games -->
      <div
          v-else
          class="flex flex-col gap-8"
      >
        <div
            v-for="game in gameStore.games"
            :key="game.id"
            class="rounded-2xl overflow-hidden bg-[#05050c] shadow-2xl border border-white/10"
        >
          <!-- Score -->
          <div class="grid grid-cols-2 text-white font-black text-3xl sm:text-5xl text-center">
            <div class="bg-[#2563eb] py-3">
              {{ game.blue_score }}
            </div>

            <div class="bg-[#dc2626] py-3">
              {{ game.red_score }}
            </div>
          </div>

          <!-- Teams -->
          <div class="grid grid-cols-1 md:grid-cols-2 bg-[#080812]">

            <!-- Blue team -->
            <div class="p-4 sm:p-5 border-b md:border-b-0 md:border-r border-white/10">
              <div class="mb-4 flex items-center justify-between">
                <h2 class="text-[#3b82f6] font-black text-lg sm:text-xl">
                  BLUE TEAM
                </h2>

                <span class="text-white/40 text-xs font-bold">
                  {{ gameStore.getBluePlayers(game.id).length }} joueurs
                </span>
              </div>

              <div class="rounded-xl overflow-hidden border border-white/10">
                <div class="grid grid-cols-3 bg-white/5 px-3 py-2 text-[11px] sm:text-xs uppercase tracking-widest text-white/50 font-black">
                  <div>Pseudo</div>
                  <div class="text-center">Kill</div>
                  <div class="text-center">Mort</div>
                </div>

                <div
                    v-for="player in gameStore.getBluePlayers(game.id)"
                    :key="player.id"
                    class="grid grid-cols-3 px-3 py-2 text-sm sm:text-base font-bold text-white/90 border-t border-white/5 hover:bg-white/5 transition"
                >
                  <div class="truncate pr-2">
                    {{ player.pseudo }}
                  </div>

                  <div class="text-center">
                    {{ player.kills }}
                  </div>

                  <div class="text-center">
                    {{ player.deaths }}
                  </div>
                </div>

                <p
                    v-if="gameStore.getBluePlayers(game.id).length === 0"
                    class="px-3 py-3 text-white/40 text-sm"
                >
                  Aucun joueur
                </p>
              </div>
            </div>

            <!-- Red team -->
            <div class="p-4 sm:p-5">
              <div class="mb-4 flex items-center justify-between">
                <h2 class="text-[#dc2626] font-black text-lg sm:text-xl">
                  RED TEAM
                </h2>

                <span class="text-white/40 text-xs font-bold">
                  {{ gameStore.getRedPlayers(game.id).length }} joueurs
                </span>
              </div>

              <div class="rounded-xl overflow-hidden border border-white/10">
                <div class="grid grid-cols-3 bg-white/5 px-3 py-2 text-[11px] sm:text-xs uppercase tracking-widest text-white/50 font-black">
                  <div>Pseudo</div>
                  <div class="text-center">Kill</div>
                  <div class="text-center">Mort</div>
                </div>

                <div
                    v-for="player in gameStore.getRedPlayers(game.id)"
                    :key="player.id"
                    class="grid grid-cols-3 px-3 py-2 text-sm sm:text-base font-bold text-white/90 border-t border-white/5 hover:bg-white/5 transition"
                >
                  <div class="truncate pr-2">
                    {{ player.pseudo }}
                  </div>

                  <div class="text-center">
                    {{ player.kills }}
                  </div>

                  <div class="text-center">
                    {{ player.deaths }}
                  </div>
                </div>

                <p
                    v-if="gameStore.getRedPlayers(game.id).length === 0"
                    class="px-3 py-3 text-white/40 text-sm"
                >
                  Aucun joueur
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>
