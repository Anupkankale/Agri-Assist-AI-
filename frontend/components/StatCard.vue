<script setup lang="ts">
defineProps<{
  title: string
  value: string
  detail: string
}>()
</script>

<template>
  <div class="rounded-[1.5rem] border border-moss/10 bg-white/85 p-6 shadow-card">
    <p class="text-sm text-slate-500">{{ title }}</p>
    <p class="mt-3 font-display text-3xl font-semibold text-night">{{ value }}</p>
    <p class="mt-3 text-sm leading-6 text-slate-600">{{ detail }}</p>
  </div>
</template>
