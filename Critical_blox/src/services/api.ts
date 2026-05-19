const API_URL = import.meta.env.VITE_API_URL

export async function loginUser(email: string, password: string) {
  return fetch(`${API_URL}auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  })
}

export async function getMe() {
  const response = await fetch(`${API_URL}auth/me`, {
    method: 'GET',
    credentials: 'include',
  })

  if (!response.ok) {
    throw new Error('Non connecté')
  }

  return response.json()
}

export async function registerUser(pseudo: string, email: string, password: string) {
  const response = await fetch(`${API_URL}users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      pseudo: pseudo.trim() === '' ? '' : pseudo,
      email,
      password,
    }),
  })

  return response.json()
}
