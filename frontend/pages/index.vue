<script setup lang="ts">
const highlights = [
  {
    title: 'Satellite Crop Monitoring',
    value: '24/7',
    detail: 'Continuous crop visibility with AI-generated field alerts and anomaly detection.'
  },
  {
    title: 'Yield Forecast Confidence',
    value: '89%',
    detail: 'Predictive models help operations teams estimate production risk earlier in the season.'
  },
  {
    title: 'Farmer Support Workflows',
    value: '5x',
    detail: 'Faster response times for agronomy recommendations, issue logging, and next-action planning.'
  }
]
</script>

<template>
  <div class="space-y-10">
    <HeroPanel />

    <section class="grid gap-6 lg:grid-cols-3">
      <StatCard
        v-for="item in highlights"
        :key="item.title"
        :title="item.title"
        :value="item.value"
        :detail="item.detail"
      />
    </section>
  </div>
</template>
