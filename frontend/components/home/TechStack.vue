<script setup lang="ts">
const { t } = useL10n();
</script>

<template>
  <section class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-vibrant sm:text-4xl">{{ t('techTitle') }}</h2>
        <p class="mt-4 text-lg leading-8 text-white/70">
          {{ t('techSub') }}
        </p>
      </div>
      <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div class="glass-card flex flex-col items-center text-center p-10 group hover:scale-105 transition-transform duration-500">
          <div class="text-3xl font-black text-wheat mb-4 drop-shadow-sm">Nemotron-3</div>
          <h3 class="text-base font-bold text-white">{{ t('tech1') }}</h3>
          <p class="mt-2 text-sm text-white/60">{{ t('tech1Sub') }}</p>
        </div>
        <div class="glass-card flex flex-col items-center text-center p-10 group hover:scale-105 transition-transform duration-500">
          <div class="text-3xl font-black text-field mb-4 drop-shadow-sm">RAG Pipeline</div>
          <h3 class="text-base font-bold text-white">{{ t('tech2') }}</h3>
          <p class="mt-2 text-sm text-white/60">{{ t('tech2Sub') }}</p>
        </div>
        <div class="glass-card flex flex-col items-center text-center p-10 group hover:scale-105 transition-transform duration-500">
          <div class="text-3xl font-black text-moss mb-4 drop-shadow-sm">Nuxt + Laravel</div>
          <h3 class="text-base font-bold text-white">{{ t('tech3') }}</h3>
          <p class="mt-2 text-sm text-white/60">{{ t('tech3Sub') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
