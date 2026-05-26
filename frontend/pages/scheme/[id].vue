<script setup lang="ts">
const route = useRoute();
const { getSchemeById } = useSchemes();

const schemeId = route.params.id as string;
const scheme = computed(() => getSchemeById(schemeId));

if (!scheme.value) {
  // In a real app, you might want to fetch it if not in state
}
</script>

<template>
  <div class="mx-auto max-w-5xl px-6 py-12 lg:px-8">
    <NuxtLink to="/results" class="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-moss">
      &larr; Back to Results
    </NuxtLink>

    <div v-if="scheme" class="space-y-8">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 class="text-4xl font-bold text-slate-900">{{ scheme.name }}</h1>
        <SchemesEligibilityBadge :is-eligible="true" />
      </div>

      <SchemesSchemeDetail :scheme="scheme" />
    </div>

    <div v-else class="py-20 text-center">
      <CommonLoadingSpinner />
      <p class="mt-4 text-slate-500">Loading scheme details...</p>
    </div>
  </div>
</template>
