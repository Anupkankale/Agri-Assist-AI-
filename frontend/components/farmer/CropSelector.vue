<script setup lang="ts">
import { indianCrops } from '~/utils/cropList';

const { profile } = useFarmerProfile();
const availableCrops = indianCrops;

const toggleCrop = (crop: string) => {
  const index = profile.value.crops.indexOf(crop);
  if (index === -1) {
    profile.value.crops.push(crop);
  } else {
    profile.value.crops.splice(index, 1);
  }
};
</script>

<template>
  <div class="space-y-2">
    <label class="text-sm font-medium text-slate-700">Select Crops</label>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="crop in availableCrops"
        :key="crop"
        @click="toggleCrop(crop)"
        :class="[
          'rounded-full px-4 py-1.5 text-xs font-medium transition',
          profile.crops.includes(crop) 
            ? 'bg-moss text-white' 
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        ]"
      >
        {{ crop }}
      </button>
    </div>
  </div>
</template>
