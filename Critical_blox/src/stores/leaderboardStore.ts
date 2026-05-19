import { defineStore } from 'pinia'
import { ref } from 'vue'
import {getLeaderboard} from "@/services/Api_Leaderboard.ts";


export type LeaderboardPlayer = {
  pseudo: string
  kills: number
  deaths: number
  win_total: number
}

export const useLeaderboardStore = defineStore('leaderboard', () => {
  const loading = ref(false)
  const players = ref<LeaderboardPlayer[]>([])

  async function fetchLeaderboard(page = 1, size = 10) {
    loading.value = true

    try {
      players.value = await getLeaderboard(page, size)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    players,
    fetchLeaderboard,
  }
})
