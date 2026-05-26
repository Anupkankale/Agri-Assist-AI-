<script setup lang="ts">
defineProps<{
  tip: string;
  category: string;
}>();
</script>

<template>
  <div class="flex items-start gap-4 rounded-xl border border-moss/20 bg-moss/5 p-4">
    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-moss text-white">
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div>
      <span class="text-[10px] font-bold uppercase tracking-widest text-moss">{{ category }}</span>
      <p class="mt-1 text-sm text-slate-700">{{ tip }}</p>
    </div>
  </div>
</template>
