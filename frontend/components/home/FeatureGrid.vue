<script setup lang="ts">
const { t } = useL10n();

const features = computed(() => [
  {
    title: t('feat1'),
    description: t('feat1Sub'),
    icon: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
  },
  {
    title: t('feat2'),
    description: t('feat2Sub'),
    icon: 'M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.618 0-1.11-.512-1.12-1.13L6.34 18m11.32 0h-11.32m0 0V4.062c0-.626.51-1.138 1.136-1.138H16.5c.627 0 1.137.512 1.137 1.138V18'
  },
  {
    title: t('feat3'),
    description: t('feat3Sub'),
    icon: 'M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M3 12h2.25m.386-6.364 1.591 1.591M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
  },
  {
    title: t('feat4'),
    description: t('feat4Sub'),
    icon: 'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
  },
  {
    title: t('feat5'),
    description: t('feat5Sub'),
    icon: 'M12 21a9.004 9.004 0 0 0 8.716-6.747c.07-.27.106-.549.11-.828l.004-.378a9 9 0 0 0-17.658-1.53c.004.25.03.5.078.745A9 9 0 0 0 12 21Z'
  },
  {
    title: t('feat6'),
    description: t('feat6Sub'),
    icon: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25'
  }
]);
</script>

<template>
  <section class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-vibrant sm:text-4xl">{{ t('featTitle') }}</h2>
        <p class="mt-4 text-lg leading-8 text-white/70">
          {{ t('featSub') }}
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.title" class="glass-card p-8 group hover:bg-white/15 transition-all">
            <dt class="flex items-center gap-x-3 text-base font-bold leading-7 text-white">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20 group-hover:bg-moss transition-colors">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="feature.icon" />
                </svg>
              </div>
              {{ feature.title }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-white/60">
              <p class="flex-auto">{{ feature.description }}</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
