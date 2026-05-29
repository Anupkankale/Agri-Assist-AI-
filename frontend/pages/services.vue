<script setup lang="ts">
const { t, locale } = useL10n();

const services = computed(() => [
  {
    title: t('servExportTitle'),
    desc: t('servExportDesc'),
    icon: 'M12 21a9.004 9.004 0 0 0 8.716-6.747c.07-.27.106-.549.11-.828l.004-.378a9 9 0 0 0-17.658-1.53c.004.25.03.5.078.745A9 9 0 0 0 12 21Z M12 3v15 M3 12h18',
    color: 'bg-wheat',
    link: '#'
  },
  {
    title: t('servWeatherTitle'),
    desc: t('servWeatherDesc'),
    icon: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z',
    color: 'bg-field',
    link: '#'
  },
  {
    title: t('servPriceTitle'),
    desc: t('servPriceDesc'),
    icon: 'M2.25 18L9 11.25l4.5 4.5L21.75 7.5 M21.75 12V7.5H17.25',
    color: 'bg-moss',
    link: '#'
  },
  {
    title: t('servSchemeTitle'),
    desc: t('servSchemeDesc'),
    icon: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25',
    color: 'bg-moss',
    link: '/check'
  },
  {
    title: t('servLoanTitle'),
    desc: t('servLoanDesc'),
    icon: 'M12 6v12m-3-2.818.803.225a3.382 3.382 0 0 0 3.066 0l.814-.228a3.382 3.382 0 0 1 2.45-.11l1.276.51a.981.981 0 0 1 .591.903v2.047a.996.996 0 0 1-.57.9l-1.315.562a3.382 3.382 0 0 1-2.456.11l-.741-.208a3.382 3.382 0 0 0-3.066 0l-.594.167a.996.996 0 0 1-.57-.9v-2.047a.981.981 0 0 1 .59-.903l1.277-.51a3.382 3.382 0 0 0 2.45-.11l.814-.228a3.382 3.382 0 0 1 3.066 0l.803.225M9 5.25v13.5',
    color: 'bg-wheat',
    link: '#'
  },
  {
    title: t('servAutomationTitle'),
    desc: t('servAutomationDesc'),
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    color: 'bg-field',
    link: '#'
  },
  {
    title: t('servMachineryTitle'),
    desc: t('servMachineryDesc'),
    icon: 'M11.42 15.17L11.08 15.41a2.25 2.25 0 000 3.18l.24.24a2.25 2.25 0 003.18 0l.34-.34a2.25 2.25 0 000-3.18l-.24-.24a2.25 2.25 0 00-3.18 0z M14.25 9.75l1.06-1.06a2.25 2.25 0 000-3.18l-.24-.24a2.25 2.25 0 00-3.18 0l-1.06 1.06a2.25 2.25 0 000 3.18l.24.24a2.25 2.25 0 003.18 0z M16.5 13.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
    color: 'bg-soil',
    link: '#'
  },
  {
    title: t('servTrainingTitle'),
    desc: t('servTrainingDesc'),
    icon: 'M4.26 10.174L19.04 18.06c.414.22.915-.08.915-.55v-11.02c0-.47-.5-.77-.915-.55L4.26 13.826c-.414.22-.414.82 0 1.042z',
    color: 'bg-moss',
    link: '#'
  }
]);

const subLeading = computed(() => (locale.value === 'en' ? 'leading-8' : 'leading-relaxed sm:leading-loose'));
</script>

<template>
  <div class="min-h-screen">
    <!-- Services Hero -->
    <section v-reveal class="section-padding pt-32 sm:pt-40">
      <div class="container-tight">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-7xl text-vibrant mb-8 leading-tight">
            {{ t('servTitle') }}
          </h1>
          <p 
            class="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto"
            :class="subLeading"
          >
            {{ t('servSub') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding">
      <div class="container-tight">
        <div v-reveal.stagger class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="service in services" :key="service.title" class="glass-card-refined p-10 group flex flex-col h-full">
            <div class="icon-glass mb-10">
              <div :class="['icon-glow', service.color]"></div>
              <svg class="h-7 w-7 text-white transition-transform duration-700 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" :d="service.icon" />
              </svg>
            </div>
            
            <h3 class="text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-vibrant transition-colors duration-500">
              {{ service.title }}
            </h3>
            <p class="text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-500 mb-8 flex-1">
              {{ service.desc }}
            </p>

            <NuxtLink 
              :to="service.link"
              class="glass-button !py-3 !px-6 text-[11px] uppercase tracking-widest text-center self-start group-hover:bg-white/20 transition-all"
            >
              Explore Service
            </NuxtLink>
          </div>

          <!-- Coming Soon Card -->
          <div class="glass-card-refined p-10 border-dashed border-white/10 bg-white/[0.02] flex flex-col items-center justify-center text-center opacity-60">
             <div class="h-14 w-14 rounded-full border border-white/10 flex items-center justify-center mb-6">
                <svg class="h-6 w-6 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
             </div>
             <p class="text-xs font-bold uppercase tracking-widest text-white/30">More Services Coming Soon</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Section -->
    <section v-reveal class="section-padding section-vibrant">
      <div class="container-tight">
        <div class="glass-card-thick p-12 sm:p-20 text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-moss/20 to-wheat/10 -z-10"></div>
          <h2 class="text-3xl font-bold text-white sm:text-4xl text-vibrant mb-6">
            Need Custom Support?
          </h2>
          <p class="text-lg text-white/60 max-w-xl mx-auto mb-10">
            Our team is working day and night to provide the best tools for the farming community. Connect with us for any specific requirements.
          </p>
          <a href="https://anupkankale.com" target="_blank" class="glass-button-primary !px-12 !py-5 text-lg">
            Contact Anup Kankale
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
