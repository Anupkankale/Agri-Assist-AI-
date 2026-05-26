<script setup lang="ts">
import type { Scheme } from '~/types/scheme';

defineProps<{
  scheme: Scheme;
}>();
</script>

<template>
  <div class="space-y-8">
    <section>
      <h2 class="text-2xl font-bold text-slate-900">About the Scheme</h2>
      <p class="mt-4 text-lg text-slate-700">{{ scheme.description }}</p>
    </section>

    <div class="grid gap-8 md:grid-cols-2">
      <section>
        <h3 class="text-xl font-bold text-slate-900">Benefits</h3>
        <ul class="mt-4 space-y-2">
          <li v-for="benefit in scheme.benefits" :key="benefit" class="flex items-start gap-3">
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss"></span>
            <span class="text-slate-700">{{ benefit }}</span>
          </li>
        </ul>
      </section>

      <section>
        <h3 class="text-xl font-bold text-slate-900">Eligibility</h3>
        <ul class="mt-4 space-y-2">
          <li v-for="criteria in scheme.eligibilityCriteria" :key="criteria" class="flex items-start gap-3">
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss"></span>
            <span class="text-slate-700">{{ criteria }}</span>
          </li>
        </ul>
      </section>
    </div>

    <SchemesDocumentChecklist :documents="scheme.documentsRequired" />
  </div>
</template>
