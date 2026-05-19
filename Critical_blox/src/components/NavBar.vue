<script setup lang="ts">
import { ref } from 'vue'

import { ArrowRightEndOnRectangleIcon } from '@heroicons/vue/24/solid'
import SignInModal from "@/components/SignInModal.vue";

const menuOpen = ref(false)
const signInOpen = ref(false)

const navLinks = [
  { label: 'LeaderBoard', route: '/leaderboard' },
  { label: 'Game', route: '/game' },
  { label: 'Stats', route: '/stats' },
]

function navigate(route: string) {
  menuOpen.value = false
}

function openSignIn() {
  menuOpen.value = false
  signInOpen.value = true
}
</script>

<template>
  <nav class="bg-[#0e091d] border-b border-[#1f1f2f] sticky top-0 z-50 font-mono">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

      <!-- Logo -->
      <a href="/" class="text-white font-bold text-lg tracking-tight whitespace-nowrap">
        Critical_Blox
      </a>

      <!-- Liens desktop -->
      <div class="hidden md:flex items-center gap-10">
        <a
            v-for="link in navLinks"
            :key="link.route"
            :href="link.route"
            class="text-white hover:text-white/70 font-bold text-lg tracking-tight transition-colors duration-150"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Sign In desktop -->
      <div class="hidden md:flex items-center">
        <button
            @click="openSignIn"
            class="flex items-center gap-2 px-5 py-2 bg-white text-[#0e091d] font-bold text-sm rounded-md hover:bg-[#e0e0e0] transition-colors duration-150 whitespace-nowrap cursor-pointer"
        >
          <ArrowRightEndOnRectangleIcon class="w-4 h-4" />
          Sign In
        </button>
      </div>

      <!-- Hamburger mobile -->
      <button
          class="md:hidden flex flex-col gap-5px p-1 bg-transparent border-none cursor-pointer"
          @click="menuOpen = !menuOpen"
          aria-label="Menu"
      >
        <span
            class="block w-6 h-0.5 bg-white rounded transition-all duration-300"
            :class="{ 'rotate-45 translate-y-7px': menuOpen }"
        ></span>
        <span
            class="block w-6 h-0.5 bg-white rounded transition-all duration-300"
            :class="{ 'opacity-0': menuOpen }"
        ></span>
        <span
            class="block w-6 h-0.5 bg-white rounded transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-7px': menuOpen }"
        ></span>
      </button>

    </div>

    <!-- Menu mobile -->
    <transition name="slide">
      <div
          v-if="menuOpen"
          class="md:hidden flex flex-col gap-1 px-8 pt-4 pb-6 border-t border-[#1f1f2f]"
      >
        <a
            v-for="link in navLinks"
            :key="link.route"
            :href="link.route"
            class="text-white hover:text-white/70 font-bold text-lg py-2 transition-colors duration-150"
            @click="menuOpen = false"
        >
          {{ link.label }}
        </a>

        <hr class="border-[#1f1f2f] my-2" />

        <button
            @click="openSignIn"
            class="flex items-center gap-2 self-start px-5 py-2 bg-white text-[#0e091d] font-bold text-sm rounded-md hover:bg-[#e0e0e0] transition-colors duration-150 mt-1 cursor-pointer"
        >
          <ArrowRightEndOnRectangleIcon class="w-4 h-4" />
          Sign In
        </button>
      </div>
    </transition>
  </nav>

  <!-- Modal Sign In -->
  <SignInModal :show="signInOpen" @close="signInOpen = false" />
</template>
