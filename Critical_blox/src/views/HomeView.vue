<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import { useAuthStore } from '@/stores/authStore'
import Home from "@/components/Home.vue";
import InfoSection from "@/components/InfoSection.vue";

const authStore = useAuthStore()

onMounted(() => {
  authStore.fetchMe()
})
</script>

<template>
  <NavBar />
  <Home/>
  <InfoSection/>

  <p v-if="authStore.user">
    {{ authStore.user.email }}
  </p>

  <p v-else>
    Non connecté
  </p>
</template>
