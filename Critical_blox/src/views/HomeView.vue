<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import { useAuthStore } from '@/stores/authStore'
import Home from "@/components/Home.vue";
import InfoSection from "@/components/InfoSection.vue";
import Footer from "@/components/Footer.vue";

const authStore = useAuthStore()

onMounted(() => {
  authStore.fetchMe()
})
</script>

<template>
  <NavBar />
  <Home/>
  <InfoSection/>
  <Footer/>

<!--  <p v-if="authStore.user">-->
<!--    {{ authStore.user.email }}-->
<!--  </p>-->

<!--  <p v-else>-->
<!--    Non connecté-->
<!--  </p>-->
</template>
