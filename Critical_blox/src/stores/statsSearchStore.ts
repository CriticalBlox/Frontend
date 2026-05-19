import { defineStore } from 'pinia'
import { ref } from 'vue'
import type {PlayerStats} from "@/models/stats.ts";
import {getStatsByPseudo} from "@/services/Api_Stats.ts";


export const useStatsSearchStore = defineStore('statsSearch', () => {
  const loading = ref(false)
  const errorMessage = ref('')
  const stats = ref<PlayerStats | null>(null)

  async function searchByPseudo(pseudo: string) {
    errorMessage.value = ''
    stats.value = null

    if (pseudo.trim() === '') {
      errorMessage.value = 'Entre un pseudo'
      return
    }

    loading.value = true

    try {
      stats.value = await getStatsByPseudo(pseudo.trim())
    } catch (error) {
      errorMessage.value =
        error instanceof Error
          ? error.message
          : 'Erreur inconnue'
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    errorMessage,
    stats,
    searchByPseudo,
  }
})
