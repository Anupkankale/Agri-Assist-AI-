<script setup lang="ts">
const { t } = useL10n();
</script>

<template>
  <section v-reveal class="section-padding">
    <div class="container-tight">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-vibrant sm:text-4xl">{{ t('techTitle') }}</h2>
        <p class="mt-4 text-lg leading-8 text-white/70">
          {{ t('techSub') }}
        </p>
      </div>
      <div v-reveal.stagger class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div class="glass-card-refined flex flex-col items-center text-center p-12 group">
          <div class="icon-glass mb-8">
            <div class="icon-glow bg-wheat"></div>
            <div class="text-xs font-black text-wheat uppercase tracking-tighter">AI</div>
          </div>
          <h3 class="text-lg font-bold text-white tracking-tight">{{ t('tech1') }}</h3>
          <p class="mt-3 text-sm text-white/50 group-hover:text-white/70 transition-colors duration-500">{{ t('tech1Sub') }}</p>
        </div>
        <div class="glass-card-refined flex flex-col items-center text-center p-12 group">
          <div class="icon-glass mb-8">
            <div class="icon-glow bg-field"></div>
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-white tracking-tight">{{ t('tech2') }}</h3>
          <p class="mt-3 text-sm text-white/50 group-hover:text-white/70 transition-colors duration-500">{{ t('tech2Sub') }}</p>
        </div>
        <div class="glass-card-refined flex flex-col items-center text-center p-12 group">
          <div class="icon-glass mb-8">
            <div class="icon-glow bg-moss"></div>
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-white tracking-tight">{{ t('tech3') }}</h3>
          <p class="mt-3 text-sm text-white/50 group-hover:text-white/70 transition-colors duration-500">{{ t('tech3Sub') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
