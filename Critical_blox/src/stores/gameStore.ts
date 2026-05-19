import { defineStore } from 'pinia'
import { ref } from 'vue'
import type {Game, GamePlayer} from "@/models/game.ts";
import {getGamePlayers, getGames} from "@/services/Api_Game.ts";


export const useGameStore = defineStore('game', () => {
  const loading = ref(false)
  const errorMessage = ref('')
  const games = ref<Game[]>([])
  const playersByGame = ref<Record<number, GamePlayer[]>>({})

  async function fetchGames(page = 1, size = 5) {
    loading.value = true
    errorMessage.value = ''

    try {
      const gamesData = await getGames(page, size)

      games.value = gamesData
      playersByGame.value = {}

      await Promise.all(
        gamesData.map(async (game: Game) => {
          playersByGame.value[game.id] = await getGamePlayers(game.id)
        }),
      )
    } catch (error) {
      errorMessage.value =
        error instanceof Error
          ? error.message
          : 'Erreur inconnue'
    } finally {
      loading.value = false
    }
  }

  function getBluePlayers(gameId: number) {
    return playersByGame.value[gameId]?.filter(
      player => player.team === 'blue',
    ) ?? []
  }

  function getRedPlayers(gameId: number) {
    return playersByGame.value[gameId]?.filter(
      player => player.team === 'red',
    ) ?? []
  }

  return {
    loading,
    errorMessage,
    games,
    playersByGame,
    fetchGames,
    getBluePlayers,
    getRedPlayers,
  }
})
