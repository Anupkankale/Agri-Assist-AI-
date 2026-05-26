<script setup lang="ts">
import type { WeatherAdvisory } from '~/types/advisory';

defineProps<{
  advisory: WeatherAdvisory;
}>();
</script>

<template>
  <div class="rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm font-medium opacity-80">Current Weather</p>
        <h3 class="mt-1 text-3xl font-bold">{{ advisory.temperature }}°C</h3>
        <p class="text-lg">{{ advisory.condition }}</p>
      </div>
      <div class="h-16 w-16 opacity-80">
        <!-- Weather icon placeholder -->
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    </div>
    
    <div class="mt-6 space-y-3">
      <p class="text-xs font-bold uppercase tracking-wider opacity-80">Advisory</p>
      <ul class="space-y-2">
        <li v-for="tip in advisory.recommendations" :key="tip" class="flex items-start gap-2 text-sm">
          <span class="mt-1 h-1 w-1 shrink-0 rounded-full bg-white"></span>
          {{ tip }}
        </li>
      </ul>
    </div>
  </div>
</template>
