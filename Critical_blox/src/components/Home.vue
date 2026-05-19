<script setup lang="ts">
import { useRouter } from 'vue-router'
import bgHome from '@/assets/bg_home.png'
import logo from '@/assets/logo.png'

const router = useRouter()

function goToLeaderboard() {
  router.push('/leaderboard')
}
</script>

<template>
  <div class="relative min-h-[calc(100vh-64px)] w-full flex items-center justify-center overflow-hidden">

    <img :src="bgHome" alt="bg" aria-hidden="true" class="absolute inset-0 w-full h-full object-cover object-top scale-100"/>
    <div class="relative z-10 flex flex-col items-center gap-6 sm:gap-8 px-4">

      <img
          :src="logo"
          alt="Critical Blox"
          class="w-[85vw] sm:w-520px md:w-640px lg:w-760px]"
      />

      <button
          @click="goToLeaderboard"
          class="px-8 py-2.5 bg-[#f9c62c] text-white font-bold text-base border-[5px] border-white rounded-lg cursor-pointer transition-opacity duration-150 hover:opacity-90 "
      >
        LeaderBoard
      </button>

    </div>
  </div>
</template>
