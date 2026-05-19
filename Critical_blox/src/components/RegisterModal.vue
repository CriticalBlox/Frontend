<script setup lang="ts">
import { UserPlusIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import { useRegisterStore } from '@/stores/registerStore'

const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  close: []
  openSignIn: []
}>()

const registerStore = useRegisterStore()

const username = ref('')
const email = ref('')
const password = ref('')
const confirm = ref('')

async function handleRegister() {
  const success = await registerStore.register(
      username.value,
      email.value,
      password.value,
      confirm.value,
  )

  if (success) {
    emit('openSignIn')
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center">

        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="emit('close')" />

        <!-- Modal box -->
        <div class="relative rounded-2xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden font-mono bg-white">

          <!-- Header -->
          <div class="flex flex-col items-center px-6 py-5 border-b border-gray-100">
            <div class="w-full flex items-center justify-between mb-3">
              <div class="w-5" />

              <h2 class="text-[#0f0f2d] font-extrabold text-xl tracking-tight"></h2>

              <button
                  @click="emit('close')"
                  class="p-1 rounded-lg text-[#0f0f2d]/40 hover:text-[#0f0f2d] hover:bg-black/10 transition-all"
              >
                <XMarkIcon class="w-5 h-5" />
              </button>
            </div>

            <div class="w-40 h-0.5 bg-[#0f0f2d] rounded-full"></div>
          </div>

          <!-- Body -->
          <div class="px-6 py-5 flex flex-col gap-4">

            <div class="flex flex-col gap-1">
              <label class="text-xs font-bold uppercase tracking-widest text-[#0e091d]/60">Pseudo</label>

              <input
                  v-model="username"
                  type="text"
                  placeholder="Votre pseudo"
                  class="w-full px-4 py-2.5 rounded-xl border border-[#0e091d]/40 bg-white text-[#0e091d] text-sm placeholder-[#0e091d]/30 focus:outline-none focus:ring-2 focus:ring-[#0e091d]/20 focus:border-[#0e091d]/40 transition"
              />
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-xs font-bold uppercase tracking-widest text-[#0e091d]/60">
                Email <span class="text-red-500">*</span>
              </label>

              <input
                  v-model="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  class="w-full px-4 py-2.5 rounded-xl border border-[#0e091d]/40 bg-white text-[#0e091d] text-sm placeholder-[#0e091d]/30 focus:outline-none focus:ring-2 focus:ring-[#0e091d]/20 focus:border-[#0e091d]/40 transition"
              />
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-xs font-bold uppercase tracking-widest text-[#0e091d]/60">
                Mot de passe <span class="text-red-500">*</span>
              </label>

              <input
                  v-model="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  class="w-full px-4 py-2.5 rounded-xl border border-[#0e091d]/40 bg-white text-[#0e091d] text-sm placeholder-[#0e091d]/30 focus:outline-none focus:ring-2 focus:ring-[#0e091d]/20 focus:border-[#0e091d]/40 transition"
              />
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-xs font-bold uppercase tracking-widest text-[#0e091d]/60">
                Confirmer <span class="text-red-500">*</span>
              </label>

              <input
                  v-model="confirm"
                  type="password"
                  placeholder="••••••••"
                  required
                  class="w-full px-4 py-2.5 rounded-xl border border-[#0e091d]/40 bg-white text-[#0e091d] text-sm placeholder-[#0e091d]/30 focus:outline-none focus:ring-2 focus:ring-[#0e091d]/20 focus:border-[#0e091d]/40 transition"
              />
            </div>

            <p
                v-if="registerStore.errorMessage"
                class="text-sm text-red-500 font-bold"
            >
              {{ registerStore.errorMessage }}
            </p>

          </div>

          <!-- Footer -->
          <div class="flex items-center justify-between px-6 py-4 border-t border-gray-100">

            <button
                @click="emit('openSignIn')"
                class="text-xs text-[#0e091d]/60 font-bold underline underline-offset-2 hover:text-[#0e091d] transition cursor-pointer bg-transparent border-none"
            >
              Se connecter
            </button>

            <button @click="handleRegister" :disabled="registerStore.loading"
                class="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold bg-[#0f0f2d] text-white hover:bg-[#1a1a4a] transition cursor-pointer disabled:opacity-50"
            >
              <UserPlusIcon class="w-4 h-4" />
              {{ registerStore.loading ? 'Inscription...' : "S'inscrire" }}
            </button>

          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>
