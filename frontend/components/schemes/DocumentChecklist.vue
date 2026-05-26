<script setup lang="ts">
defineProps<{
  documents: string[];
}>();
</script>

<template>
  <div class="rounded-xl bg-slate-50 p-6 ring-1 ring-slate-200">
    <h3 class="text-lg font-bold text-slate-900">Required Documents</h3>
    <p class="mt-1 text-sm text-slate-500 italic">Please keep these documents ready for application</p>
    
    <div class="mt-4 grid gap-3 sm:grid-cols-2">
      <div 
        v-for="doc in documents" 
        :key="doc" 
        class="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3"
      >
        <div class="flex h-6 w-6 items-center justify-center rounded-full bg-moss/10 text-moss">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span class="text-sm font-medium text-slate-700">{{ doc }}</span>
      </div>
    </div>

    <div class="mt-6 flex justify-end">
      <button class="text-sm font-semibold text-moss hover:text-night">
        Print Checklist
      </button>
    </div>
  </div>
</template>
