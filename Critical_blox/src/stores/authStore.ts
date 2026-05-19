import { defineStore } from 'pinia'
import { ref } from 'vue'

import {
  loginUser,
  getMe,
} from '@/services/api'

export const useAuthStore = defineStore('auth', () => {
  const loading = ref(false)
  const errorMessage = ref('')
  const user = ref<any>(null)

  async function fetchMe() {
    try {
      user.value = await getMe()
    } catch {
      user.value = null
    }
  }

  async function login(email: string, password: string) {
    errorMessage.value = ''
    loading.value = true

    try {
      await loginUser(email, password)
      await fetchMe()

      return true
    } catch (error) {
      errorMessage.value =
        error instanceof Error ? error.message : 'Erreur inconnue'
      return false
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    await fetch(`${import.meta.env.VITE_API_URL}auth/logout`, {
      method: 'POST',
      credentials: 'include',
    })

    user.value = null
  }

  return {
    loading,
    errorMessage,
    user,
    login,
    logout,
    fetchMe,
  }
})
