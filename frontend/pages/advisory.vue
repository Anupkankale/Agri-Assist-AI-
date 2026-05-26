<script setup lang="ts">
const { advisory, loading, fetchAdvisory } = useWeather();
const { profile } = useFarmerProfile();

onMounted(() => {
  if (profile.value.state) {
    fetchAdvisory(profile.value.state);
  }
});
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
    <h1 class="text-3xl font-bold text-slate-900">Farmer Advisory</h1>
    <p class="mt-2 text-slate-600">AI-driven insights for your farm in {{ profile.state || 'your region' }}</p>

    <div class="mt-10 grid gap-8 lg:grid-cols-3">
      <div class="lg:col-span-1">
        <CommonLoadingSpinner v-if="loading" />
        <AdvisoryWeatherCard v-else-if="advisory" :advisory="advisory" />
        <div v-else class="p-6 bg-slate-50 rounded-xl text-center">
          <p class="text-sm text-slate-500">Please complete your profile to see local weather advisory.</p>
          <NuxtLink to="/check" class="mt-4 inline-block text-sm font-bold text-moss">Go to Profile</NuxtLink>
        </div>
      </div>

      <div class="lg:col-span-2 space-y-6">
        <h2 class="text-xl font-bold text-slate-900">Crop Tips</h2>
        <div class="grid gap-4">
          <AdvisoryCropTip category="Irrigation" tip="Due to high temperatures, increase irrigation frequency for your wheat crop." />
          <AdvisoryCropTip category="Fertilizer" tip="Optimal time for nitrogen application based on current growth stage." />
          <AdvisoryCropTip category="Pest Control" tip="Monitor for Aphids as the weather conditions are favorable for their spread." />
        </div>
      </div>
    </div>
  </div>
</template>
