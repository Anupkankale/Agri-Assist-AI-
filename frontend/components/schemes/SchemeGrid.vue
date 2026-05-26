<script setup lang="ts">
import type { Scheme } from '~/types/scheme';

defineProps<{
  schemes: Scheme[];
}>();
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <SchemesSchemeCard 
      v-for="scheme in schemes" 
      :key="scheme.id" 
      :scheme="scheme" 
    />
  </div>
</template>
