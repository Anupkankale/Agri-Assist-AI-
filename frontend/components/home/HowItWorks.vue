<script setup lang="ts">
const { t } = useL10n();
</script>

<template>
  <section class="section-padding">
    <div class="container-tight">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold sm:text-4xl text-vibrant">{{ t('howTitle') }}</h2>
        <p class="mt-5 text-lg text-white/60">
          {{ t('howSub') }}
        </p>
      </div>
      <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div class="glass-card p-12 flex flex-col items-center text-center">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-wheat/20 ring-1 ring-wheat/30 text-xl font-bold text-wheat mb-8">1</div>
          <h3 class="text-xl font-bold text-white">{{ t('how1Title') }}</h3>
          <p class="mt-4 text-white/50 leading-relaxed text-sm">
            {{ t('how1Sub') }}
          </p>
        </div>
        <div class="glass-card p-12 flex flex-col items-center text-center">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-field/20 ring-1 ring-field/30 text-xl font-bold text-field mb-8">2</div>
          <h3 class="text-xl font-bold text-white">{{ t('how2Title') }}</h3>
          <p class="mt-4 text-white/50 leading-relaxed text-sm">
            {{ t('how2Sub') }}
          </p>
        </div>
        <div class="glass-card p-12 flex flex-col items-center text-center">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-moss/20 ring-1 ring-moss/30 text-xl font-bold text-moss mb-8">3</div>
          <h3 class="text-xl font-bold text-white">{{ t('how3Title') }}</h3>
          <p class="mt-4 text-white/50 leading-relaxed text-sm">
            {{ t('how3Sub') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
