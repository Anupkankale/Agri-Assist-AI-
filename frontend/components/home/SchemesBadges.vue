<script setup lang="ts">
const { t } = useL10n();

const schemes = [
  'PM-KISAN',
  'Fasal Bima Yojana',
  'Namo Shetkari',
  'Kisan Credit Card',
  'Soil Health Card',
  'PM Kusum',
  'eNAM',
  'Paramparagat Krishi Vikas Yojana',
  'National Livestock Mission',
  'Blue Revolution'
]
</script>

<template>
  <section class="py-16 sm:py-24 overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="glass-card-thick p-12 sm:p-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-moss/20 to-wheat/10 -z-10"></div>
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl text-vibrant">{{ t('schemesTitle') }}</h2>
          <p class="mt-4 text-lg leading-8 text-white/70">
            {{ t('schemesSub') }}
          </p>
        </div>
        <div class="mt-12 flex flex-wrap justify-center gap-4">
          <span
            v-for="scheme in schemes"
            :key="scheme"
            class="inline-flex items-center rounded-full bg-white/10 px-6 py-2.5 text-sm font-semibold text-wheat ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-all cursor-default"
          >
            {{ scheme }}
          </span>
          <span class="inline-flex items-center rounded-full bg-white/5 px-6 py-2.5 text-sm font-semibold text-white/40 ring-1 ring-inset ring-white/10 italic">
            {{ t('moreSoon') }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
