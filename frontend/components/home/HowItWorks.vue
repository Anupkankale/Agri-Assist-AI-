<script setup lang="ts">
const { t } = useL10n();
</script>

<template>
  <section class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-vibrant sm:text-4xl">{{ t('howTitle') }}</h2>
        <p class="mt-4 text-lg leading-8 text-white/70">
          {{ t('howSub') }}
        </p>
      </div>
      <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div class="glass-card p-10 flex flex-col items-center text-center">
          <div class="flex h-14 w-14 items-center justify-center rounded-full bg-wheat text-xl font-bold text-night mb-6">1</div>
          <h3 class="text-xl font-bold text-white">{{ t('how1Title') }}</h3>
          <p class="mt-3 text-white/60 leading-relaxed">
            {{ t('how1Sub') }}
          </p>
        </div>
        <div class="glass-card p-10 flex flex-col items-center text-center">
          <div class="flex h-14 w-14 items-center justify-center rounded-full bg-field text-xl font-bold text-white mb-6">2</div>
          <h3 class="text-xl font-bold text-white">{{ t('how2Title') }}</h3>
          <p class="mt-3 text-white/60 leading-relaxed">
            {{ t('how2Sub') }}
          </p>
        </div>
        <div class="glass-card p-10 flex flex-col items-center text-center">
          <div class="flex h-14 w-14 items-center justify-center rounded-full bg-moss text-xl font-bold text-white mb-6">3</div>
          <h3 class="text-xl font-bold text-white">{{ t('how3Title') }}</h3>
          <p class="mt-3 text-white/60 leading-relaxed">
            {{ t('how3Sub') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
