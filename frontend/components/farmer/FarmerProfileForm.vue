<script setup lang="ts">
import { indianCrops } from '~/utils/cropList';

const { profile, updateProfile } = useFarmerProfile();
const crops = ref(indianCrops);
</script>

<template>
  <div class="space-y-6 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
    <h2 class="text-xl font-bold text-slate-900">Farmer Profile</h2>
    
    <div class="grid gap-4 sm:grid-cols-2">
      <div class="space-y-2">
        <label class="text-sm font-medium text-slate-700">Full Name</label>
        <input 
          v-model="profile.name" 
          type="text" 
          class="w-full rounded-lg border-slate-300 shadow-sm focus:border-moss focus:ring-moss" 
          placeholder="Enter your name"
        />
      </div>

      <div class="space-y-2">
        <label class="text-sm font-medium text-slate-700">Land Size (Acres)</label>
        <input 
          v-model="profile.landSize" 
          type="number" 
          class="w-full rounded-lg border-slate-300 shadow-sm focus:border-moss focus:ring-moss"
        />
      </div>
    </div>

    <FarmerLocationPicker />
    
    <FarmerCropSelector />

    <div class="pt-4">
      <NuxtLink 
        to="/results" 
        class="inline-flex w-full items-center justify-center rounded-lg bg-moss px-4 py-3 text-sm font-semibold text-white transition hover:bg-night"
      >
        Check Eligibility
      </NuxtLink>
    </div>
  </div>
</template>
