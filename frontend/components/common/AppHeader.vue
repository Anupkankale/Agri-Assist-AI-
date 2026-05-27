<script setup lang="ts">
import { ref } from 'vue'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Check Eligibility', to: '/check' },
  { name: 'Advisory', to: '/advisory' },
  { name: 'About', to: '/about' }
]

const { locale, setLocale } = useL10n();

const languages = [
  { code: 'en', name: 'EN' },
  { code: 'mr', name: 'मराठी' },
  { code: 'hi', name: 'हिंदी' }
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-4 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="glass-card flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 sm:gap-3 group shrink-0" @click="closeMenu">
        <div class="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20 group-hover:bg-moss transition-colors">
          <span class="text-xs font-bold text-white">AA</span>
        </div>
        <div>
          <p class="font-display text-sm font-bold text-white leading-tight">AgriAssist AI</p>
          <p class="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/40 group-hover:text-wheat transition-colors">Smarter farming</p>
        </div>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="transition hover:text-white"
          active-class="text-white font-bold"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>

      <!-- Desktop Actions -->
      <div class="hidden items-center gap-4 md:flex">
        <div class="flex bg-white/5 rounded-full p-1 ring-1 ring-white/10">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="setLocale(lang.code as any)"
            :class="[
              'px-3 py-1 text-[10px] font-bold rounded-full transition-all',
              locale === lang.code ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white/60'
            ]"
          >
            {{ lang.name }}
          </button>
        </div>

        <NuxtLink
          to="/check"
          class="glass-button !px-5 !py-2 text-xs uppercase tracking-widest"
        >
          Get Started
        </NuxtLink>
      </div>

      <!-- Mobile Menu Toggle -->
      <button 
        @click="toggleMenu"
        class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 text-white md:hidden"
        aria-label="Toggle menu"
      >
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-[-10px]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-10px]"
    >
      <div v-if="isMenuOpen" class="mt-2 md:hidden">
        <div class="glass-card-thick p-6 space-y-6">
          <nav class="flex flex-col gap-4">
            <NuxtLink
              v-for="item in navigation"
              :key="item.to"
              :to="item.to"
              @click="closeMenu"
              class="text-lg font-semibold text-white/80 hover:text-white transition-colors py-2"
              active-class="text-white border-l-2 border-wheat pl-3"
            >
              {{ item.name }}
            </NuxtLink>
          </nav>

          <div class="h-px bg-white/10"></div>

          <div class="space-y-4">
            <p class="text-xs uppercase tracking-widest text-white/40">Select Language</p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="setLocale(lang.code as any)"
                :class="[
                  'px-4 py-2 text-sm font-bold rounded-xl transition-all ring-1',
                  locale === lang.code ? 'bg-white/20 text-white ring-white/30' : 'bg-white/5 text-white/40 ring-white/10 hover:text-white/60'
                ]"
              >
                {{ lang.name }}
              </button>
            </div>
          </div>

          <NuxtLink
            to="/check"
            @click="closeMenu"
            class="glass-button w-full text-center block !py-4 text-sm uppercase tracking-widest"
          >
            Get Started
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
</style>
