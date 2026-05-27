<script setup lang="ts">
const { t } = useL10n();
</script>

<template>
  <section v-reveal class="section-padding">
    <div class="container-tight">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold sm:text-4xl text-vibrant">{{ t('statsTitle') }}</h2>
        <p class="mt-5 text-lg text-white/60">
          {{ t('statsSub') }}
        </p>
      </div>
      <dl v-reveal.stagger class="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div class="glass-card-refined p-8 flex flex-col gap-y-4 group">
          <dt class="text-[10px] font-bold uppercase tracking-[0.25em] text-wheat/80 group-hover:text-wheat transition-colors">{{ t('stat1Title') }}</dt>
          <dd class="text-4xl font-bold tracking-tight text-white group-hover:scale-105 transition-transform origin-left">{{ t('stat1Val') }}</dd>
          <p class="text-sm text-white/50 leading-relaxed">{{ t('stat1Sub') }}</p>
        </div>
        <div class="glass-card-refined p-8 flex flex-col gap-y-4 group">
          <dt class="text-[10px] font-bold uppercase tracking-[0.25em] text-field/80 group-hover:text-field transition-colors">{{ t('stat2Title') }}</dt>
          <dd class="text-4xl font-bold tracking-tight text-white group-hover:scale-105 transition-transform origin-left">{{ t('stat2Val') }}</dd>
          <p class="text-sm text-white/50 leading-relaxed">{{ t('stat2Sub') }}</p>
        </div>
        <div class="glass-card-refined p-8 flex flex-col gap-y-4 group">
          <dt class="text-[10px] font-bold uppercase tracking-[0.25em] text-moss/80 group-hover:text-moss transition-colors">{{ t('stat3Title') }}</dt>
          <dd class="text-4xl font-bold tracking-tight text-white group-hover:scale-105 transition-transform origin-left">{{ t('stat3Val') }}</dd>
          <p class="text-sm text-white/50 leading-relaxed">{{ t('stat3Sub') }}</p>
        </div>
      </dl>
    </div>
  </section>
</template>
