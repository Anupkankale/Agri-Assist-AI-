<script setup lang="ts">
const { profile } = useFarmerProfile();

const states = ['Maharashtra', 'Punjab', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh'];
const districts = {
  'Maharashtra': ['Pune', 'Nashik', 'Nagpur'],
  'Punjab': ['Ludhiana', 'Amritsar', 'Jalandhar'],
};

const selectedStateDistricts = computed(() => {
  return districts[profile.value.state as keyof typeof districts] || [];
});
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <div class="space-y-2">
      <label class="text-sm font-medium text-slate-700">State</label>
      <select 
        v-model="profile.state" 
        class="w-full rounded-lg border-slate-300 shadow-sm focus:border-moss focus:ring-moss"
      >
        <option value="" disabled>Select State</option>
        <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
      </select>
    </div>

    <div class="space-y-2">
      <label class="text-sm font-medium text-slate-700">District</label>
      <select 
        v-model="profile.district" 
        class="w-full rounded-lg border-slate-300 shadow-sm focus:border-moss focus:ring-moss"
        :disabled="!profile.state"
      >
        <option value="" disabled>Select District</option>
        <option v-for="district in selectedStateDistricts" :key="district" :value="district">{{ district }}</option>
      </select>
    </div>
  </div>
</template>
