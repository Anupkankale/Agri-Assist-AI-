<script setup lang="ts">
definePageMeta({
  middleware: 'validate-farmer'
});

const { schemes, loading, fetchSchemes } = useSchemes();
const { profile } = useFarmerProfile();

onMounted(() => {
  fetchSchemes();
});
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
    <div class="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 class="text-3xl font-bold text-slate-900">Recommended Schemes</h1>
        <p class="mt-2 text-slate-600">Based on your profile in {{ profile.district }}, {{ profile.state }}</p>
      </div>
      
      <div class="flex gap-4">
        <NuxtLink to="/check" class="text-sm font-semibold text-moss hover:underline">Edit Profile</NuxtLink>
      </div>
    </div>

    <div class="mt-10">
      <CommonLoadingSpinner v-if="loading" />
      <template v-else>
        <SchemesSchemeGrid v-if="schemes.length > 0" :schemes="schemes" />
        <div v-else class="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
          <p class="text-slate-500">No matching schemes found for your profile.</p>
        </div>
      </template>
    </div>
  </div>
</template>
