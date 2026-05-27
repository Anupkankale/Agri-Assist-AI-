<script setup lang="ts">
const { t } = useL10n();
</script>

<template>
  <section class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-vibrant sm:text-4xl">{{ t('roadTitle') }}</h2>
        <p class="mt-4 text-lg leading-8 text-white/70">
          {{ t('roadSub') }}
        </p>
      </div>
      <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div class="glass-card p-10 relative overflow-hidden group">
          <div class="absolute top-0 right-0 p-4">
             <span class="inline-flex items-center rounded-md bg-green-500/20 px-2 py-1 text-xs font-medium text-green-300 ring-1 ring-inset ring-green-500/30">{{ t('phase') }} ✓</span>
          </div>
          <h3 class="mt-4 text-lg font-bold text-white">{{ t('road1') }}</h3>
          <p class="mt-2 text-sm text-white/60">
            {{ t('road1Sub') }}
          </p>
        </div>
        <div class="glass-card p-10 opacity-80 hover:opacity-100 transition-opacity">
          <div class="flex items-center gap-x-3">
            <span class="inline-flex items-center rounded-md bg-wheat/20 px-2 py-1 text-xs font-medium text-wheat ring-1 ring-inset ring-wheat/30">Soon</span>
          </div>
          <h3 class="mt-4 text-lg font-bold text-white">{{ t('road2') }}</h3>
          <p class="mt-2 text-sm text-white/60">
            {{ t('road2Sub') }}
          </p>
        </div>
        <div class="glass-card p-10 opacity-60 hover:opacity-100 transition-opacity">
          <div class="flex items-center gap-x-3">
            <span class="inline-flex items-center rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-white/60 ring-1 ring-inset ring-white/20">Planned</span>
          </div>
          <h3 class="mt-4 text-lg font-bold text-white">{{ t('road3') }}</h3>
          <p class="mt-2 text-sm text-white/60">
            {{ t('road3Sub') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
