<script setup lang="ts">
import {  RouterView } from 'vue-router'
import {useAuthStore} from "@/stores/authStore.ts";
import {onMounted} from "vue";
const authStore = useAuthStore()

onMounted(() => {
  authStore.fetchMe()
})

</script>


<template>
  <RouterView />
</template>
