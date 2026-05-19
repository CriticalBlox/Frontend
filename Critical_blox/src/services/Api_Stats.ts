const API_URL = import.meta.env.VITE_API_URL

export async function getStatsByPseudo(pseudo: string) {
  const response = await fetch(
    `${API_URL}stats/${encodeURIComponent(pseudo)}`,
    {
      method: 'GET',
      credentials: 'include',
    },
  )

  if (!response.ok) {
    throw new Error('Aucune stats trouvée pour ce pseudo')
  }

  return response.json()
}
