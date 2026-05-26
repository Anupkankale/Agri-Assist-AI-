<script setup lang="ts">
definePageMeta({
  layout: 'minimal'
});
</script>

<template>
  <div class="mx-auto max-w-3xl px-6 py-12 lg:px-8">
    <div class="mb-8 text-center">
      <h1 class="text-3xl font-bold text-slate-900">Get Started</h1>
      <p class="mt-2 text-slate-600">Tell us about your farm to find the best schemes for you.</p>
    </div>
    
    <FarmerFarmerProfileForm />
  </div>
</template>
