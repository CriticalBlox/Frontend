const API_URL = import.meta.env.VITE_API_URL

export async function getLeaderboard(page = 1, size = 10,) {
  const response = await fetch(
    `${API_URL}leaderboard?page=${page}&size=${size}`,
    {
      method: 'GET',
    },
  )

  if (!response.ok) {
    throw new Error('Impossible de récupérer le leaderboard')
  }

  return response.json()
}
