<script setup lang="ts">
const { t } = useL10n();

const steps = computed(() => [
  {
    id: '01',
    title: t('how1Title'),
    desc: t('how1Sub'),
    icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',
    color: 'text-wheat',
    bg: 'bg-wheat/20',
    glow: 'from-wheat/20 to-transparent'
  },
  {
    id: '02',
    title: t('how2Title'),
    desc: t('how2Sub'),
    icon: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z',
    color: 'text-field',
    bg: 'bg-field/20',
    glow: 'from-field/20 to-transparent'
  },
  {
    id: '03',
    title: t('how3Title'),
    desc: t('how3Sub'),
    icon: 'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z',
    color: 'text-moss',
    bg: 'bg-moss/20',
    glow: 'from-moss/20 to-transparent'
  }
]);
</script>

<template>
  <section class="section-padding section-vibrant">
    <div class="container-tight relative">
      <div class="mx-auto max-w-2xl text-center mb-20">
        <h2 class="text-3xl font-bold sm:text-4xl text-vibrant">{{ t('howTitle') }}</h2>
        <p class="mt-5 text-lg text-white/60">
          {{ t('howSub') }}
        </p>
      </div>

      <div class="relative px-4 sm:px-0">
        <!-- Flow Connection Lines (Desktop) -->
        <div class="hidden lg:block absolute top-10 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 relative">
          <div v-for="(step, index) in steps" :key="step.id" class="group relative">
            <div class="flex flex-col items-center text-center">
              <div class="relative mb-8">
                <!-- Outer Ring Glow -->
                <div :class="['absolute inset-0 rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-1000', step.bg]"></div>
                
                <div :class="['icon-glass !h-20 !w-20 !rounded-[2rem] border-white/10 transition-all duration-700 group-hover:scale-110 group-hover:border-white/30', step.bg]">
                  <svg class="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" :d="step.icon" />
                  </svg>
                </div>

                <!-- Number Label -->
                <div class="absolute -bottom-2 -right-2 h-7 w-7 rounded-lg bg-night-elevated border border-white/10 flex items-center justify-center text-[10px] font-black text-white shadow-2xl">
                  {{ step.id }}
                </div>
              </div>

              <h3 class="text-lg font-bold text-white tracking-tight mb-3 group-hover:text-vibrant transition-colors duration-500">{{ step.title }}</h3>
              <p class="text-sm leading-relaxed text-white/40 group-hover:text-white/60 transition-colors duration-500 max-w-[240px]">
                {{ step.desc }}
              </p>
            </div>

            <!-- Direction Indicator (Mobile) -->
            <div v-if="index < steps.length - 1" class="lg:hidden flex justify-center mt-8">
               <div class="h-12 w-px bg-gradient-to-b from-white/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Progressive Flow Status Bar -->
      <div class="mt-24 max-w-4xl mx-auto">
        <div class="glass-card-refined !bg-white/[0.01] !border-white/5 p-8">
           <div class="flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
              <div class="space-y-1">
                 <p class="text-xs font-bold uppercase tracking-widest text-white/30">System Status</p>
                 <p class="text-sm font-medium text-white/80">Real-time Analysis Ready</p>
              </div>
              
              <div class="flex-1 w-full max-w-md px-4">
                 <div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex">
                    <div class="h-full bg-wheat w-1/4 animate-pulse"></div>
                    <div class="h-full bg-field w-1/3 opacity-60"></div>
                    <div class="h-full bg-moss w-1/4 opacity-40"></div>
                 </div>
              </div>

              <div class="flex items-center gap-3">
                 <div class="h-2 w-2 rounded-full bg-field animate-ping"></div>
                 <span class="text-[10px] font-black uppercase tracking-[0.2em] text-field">AI Online</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>
