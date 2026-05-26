<script setup lang="ts">
defineProps<{
  isEligible: boolean;
}>();
</script>

<template>
  <span 
    :class="[
      'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
      isEligible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
    ]"
  >
    {{ isEligible ? 'Qualified' : 'Not Qualified' }}
  </span>
</template>
