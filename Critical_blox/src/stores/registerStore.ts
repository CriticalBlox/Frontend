import { defineStore } from 'pinia'
import { ref } from 'vue'

import { registerUser } from '@/services/api'

export const useRegisterStore = defineStore('register', () => {
  const loading = ref(false)
  const errorMessage = ref('')

  async function register(pseudo: string, email: string, password: string, confirm: string) {
    errorMessage.value = ''

    if (password !== confirm) {
      errorMessage.value =
        'Les mots de passe ne correspondent pas'

      return false
    }

    loading.value = true

    try {
      await registerUser(
        pseudo.trim() === '' ? '' : pseudo,
        email,
        password,
      )

      return true
    } catch (error) {
      errorMessage.value =
        error instanceof Error ? error.message : 'Erreur inconnue'
      return false

    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    errorMessage,
    register,
  }
})
