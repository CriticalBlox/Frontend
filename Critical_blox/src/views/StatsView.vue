<script setup lang="ts">
import StatsSearchBar from '@/components/StatsSearchBar.vue'
import StatsCard from '@/components/StatsCard.vue'

import { useStatsSearchStore } from '@/stores/statsSearchStore'
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

const statsSearchStore = useStatsSearchStore()
</script>

<template>

  <NavBar/>
  <div class="min-h-screen bg-[#090018] px-4 sm:px-8 py-8 font-mono">

    <StatsSearchBar
        @search="statsSearchStore.searchByPseudo"
    />

    <div class="mt-12">
      <p
          v-if="statsSearchStore.loading"
          class="text-white/60 text-center font-bold text-xl"
      >
        Chargement...
      </p>

      <p
          v-else-if="statsSearchStore.errorMessage"
          class="text-red-400 text-center font-bold text-xl"
      >
        {{ statsSearchStore.errorMessage }}
      </p>

      <StatsCard
          v-else-if="statsSearchStore.stats"
          :stats="statsSearchStore.stats"
      />
    </div>

    <Footer />

  </div>
</template>
