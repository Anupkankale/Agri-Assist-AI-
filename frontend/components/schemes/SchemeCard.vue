<script setup lang="ts">
import type { Scheme } from '~/types/scheme';

defineProps<{
  scheme: Scheme;
}>();
</script>

<template>
  <div class="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-md">
    <div class="p-5">
      <div class="flex items-start justify-between">
        <h3 class="font-display font-bold text-slate-900">{{ scheme.name }}</h3>
        <SchemesEligibilityBadge :is-eligible="true" />
      </div>
      <p class="mt-2 line-clamp-2 text-sm text-slate-600">{{ scheme.description }}</p>
      
      <div class="mt-4 flex flex-wrap gap-2">
        <span class="rounded bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
          {{ scheme.category }}
        </span>
      </div>
    </div>
    
    <div class="mt-auto border-t border-slate-100 p-4">
      <NuxtLink 
        :to="`/scheme/${scheme.id}`" 
        class="text-sm font-semibold text-moss hover:underline"
      >
        View Details &rarr;
      </NuxtLink>
    </div>
  </div>
</template>
