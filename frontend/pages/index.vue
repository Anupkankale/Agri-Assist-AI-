<script setup lang="ts">
const { t } = useL10n();
</script>

<template>
  <div>
    <!-- Section 1: Hero -->
    <section class="relative isolate overflow-hidden pt-14">
      <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:pt-20">
        <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div class="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" class="inline-flex space-x-6">
              <span class="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold leading-6 text-wheat ring-1 ring-inset ring-white/20">{{ t('news') }}</span>
              <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-white/60">
                <span>{{ t('phase') }}</span>
                <svg class="h-5 w-5 text-white/40" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
          <h1 class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl text-vibrant">
            {{ t('heroTitle') }} <span class="text-wheat">{{ t('heroHighlight') }}</span>
          </h1>
          <p class="mt-6 text-lg leading-8 text-white/70">
            {{ t('heroSub') }}
          </p>
          <div class="mt-10 flex items-center gap-x-6">
            <NuxtLink
              to="/check"
              class="glass-button !px-8 !py-4 text-lg"
            >
              {{ t('cta') }}
            </NuxtLink>
            <a href="https://youtube.com" target="_blank" class="text-sm font-semibold leading-6 text-white flex items-center gap-2 group">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 group-hover:bg-white/20 transition-all">
                <svg class="h-4 w-4 text-wheat" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              {{ t('demo') }}
            </a>
          </div>
        </div>
        <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div class="glass-card p-2">
              <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1470&auto=format&fit=crop" alt="Indian farmer in field" class="w-full max-w-[36rem] rounded-apple-xl shadow-2xl opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Problem Statement -->
    <HomeProblemStats />

    <!-- Section 3: How it Works -->
    <HomeHowItWorks />

    <!-- Section 4: Features -->
    <HomeFeatureGrid />

    <!-- Section 5: Schemes Covered -->
    <HomeSchemesBadges />

    <!-- Section 6: Roadmap -->
    <HomeRoadmap />

    <!-- Section 7: Technology -->
    <HomeTechStack />

    <!-- Section 8: Bottom CTA -->
    <section class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="glass-card-thick px-6 py-24 sm:px-24 xl:py-32 relative overflow-hidden text-center">
          <div class="absolute inset-0 bg-gradient-to-br from-moss/20 to-wheat/10 -z-10"></div>
          <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl text-vibrant">
            {{ t('bottomCta') }}
          </h2>
          <p class="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/70">
            {{ t('bottomSub') }}
          </p>
          <div class="mt-10 flex justify-center gap-x-6">
            <NuxtLink
              to="/check"
              class="glass-button !px-12 !py-5 text-xl"
            >
              {{ t('cta') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
