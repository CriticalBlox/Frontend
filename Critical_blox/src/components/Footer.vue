<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <footer class="bg-[#090018] border-t border-white/10 px-6 md:px-16 py-8 font-mono">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

      <span class="text-white/60 text-sm text-center md:text-left">
        © 2026 Critical Blox. Tous droits réservés.
      </span>

      <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

        <div class="flex flex-wrap justify-center gap-4">
          <a href="#" class="text-sm text-white/70 hover:text-white transition-colors duration-150">Confidentialité</a>
          <a href="#" class="text-sm text-white/70 hover:text-white transition-colors duration-150">Conditions</a>
          <a href="#" class="text-sm text-white/70 hover:text-white transition-colors duration-150">Contact</a>
        </div>

        <div class="flex items-center gap-3">
          <a href="#" target="_blank" class="text-white/50 hover:text-white transition-colors duration-150">
            <Icon icon="mdi:discord" class="w-5 h-5" />
          </a>
          <a href="#" target="_blank" class="text-white/50 hover:text-white transition-colors duration-150">
            <Icon icon="mdi:twitter" class="w-5 h-5" />
          </a>
          <a href="#" target="_blank" class="text-white/50 hover:text-white transition-colors duration-150">
            <Icon icon="mdi:instagram" class="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
  </footer>
</template>
