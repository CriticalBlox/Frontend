const API_URL = import.meta.env.VITE_API_URL

export async function getGames(page = 1, size = 5) {
  const response = await fetch(
    `${API_URL}games?page=${page}&size=${size}`,
    {
      method: 'GET',
      credentials: 'include',
    },
  )

  if (!response.ok) {
    throw new Error('Impossible de récupérer les games')
  }

  return response.json()
}

export async function getGamePlayers(gameId: number) {
  const response = await fetch(
    `${API_URL}game-players/game/${gameId}`,
    {
      method: 'GET',
      credentials: 'include',
    },
  )

  if (!response.ok) {
    throw new Error('Impossible de récupérer les joueurs de la game')
  }

  return response.json()
}
