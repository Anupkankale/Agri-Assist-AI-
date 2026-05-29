<script setup lang="ts">
import { ref } from 'vue'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
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
const isVisible = ref(true)
const isScrolled = ref(false)
let lastScrollY = 0
const THRESHOLD = 5 // px

const handleScroll = () => {
  if (process.client) {
    const currentScrollY = window.scrollY
    
    // Always show at the very top
    if (currentScrollY < 10) {
      isVisible.value = true
      isScrolled.value = false
      return
    }

    isScrolled.value = true

    // Only trigger if scroll distance is more than threshold
    if (Math.abs(currentScrollY - lastScrollY) < THRESHOLD) return

    if (currentScrollY > lastScrollY) {
      // Scrolling down - hide header
      isVisible.value = false
    } else {
      // Scrolling up - show header
      isVisible.value = true
    }
    
    lastScrollY = currentScrollY
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-apple-ease"
    :class="[
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none',
      isScrolled ? 'pt-4' : 'pt-8'
    ]"
  >
    <div class="container-tight">
      <div 
        class="glass-card-thick flex items-center justify-between px-5 py-3 sm:px-8 sm:py-4 transition-all duration-500"
        :class="isScrolled ? 'mx-0 shadow-2xl' : 'mx-0'"
      >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group shrink-0" @click="closeMenu">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:bg-moss/40 group-hover:ring-moss/50 transition-all duration-500">
          <span class="text-xs font-bold text-white group-hover:scale-110 transition-transform">AA</span>
        </div>
        <div>
          <p class="font-display text-sm font-bold text-white leading-tight">AgriAssist AI</p>
          <p class="text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-wheat transition-colors duration-500">Smarter farming</p>
        </div>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden items-center gap-10 text-[13px] font-semibold uppercase tracking-widest text-white/50 md:flex">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="transition-all hover:text-white relative group py-2"
          active-class="text-white"
        >
          {{ item.name }}
          <span class="absolute bottom-0 left-0 w-0 h-px bg-wheat transition-all group-hover:w-full" :class="{'w-full': $route.path === item.to}"></span>
        </NuxtLink>
      </nav>

      <!-- Desktop Actions -->
      <div class="hidden items-center gap-6 md:flex">
        <div class="flex bg-white/5 rounded-full p-1 ring-1 ring-white/10">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="setLocale(lang.code as any)"
            :class="[
              'px-4 py-1.5 text-[10px] font-bold rounded-full transition-all duration-300',
              locale === lang.code ? 'bg-white/15 text-white shadow-sm ring-1 ring-white/20' : 'text-white/40 hover:text-white/60'
            ]"
          >
            {{ lang.name }}
          </button>
        </div>

        <NuxtLink
          to="/services"
          class="glass-button-primary !px-6 !py-2.5 text-[11px] uppercase tracking-widest"
        >
          Get Started
        </NuxtLink>
      </div>

      <!-- Mobile Menu Toggle -->
      <button 
        @click="toggleMenu"
        class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 text-white md:hidden hover:bg-white/10 transition-colors"
        aria-label="Toggle menu"
      >
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-500 ease-apple-ease"
      enter-from-class="opacity-0 translate-y-[-20px] scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-[-20px] scale-95"
    >
      <div v-if="isMenuOpen" class="mt-4 md:hidden">
        <div class="glass-card-thick p-8 space-y-8">
          <nav class="flex flex-col gap-6">
            <NuxtLink
              v-for="item in navigation"
              :key="item.to"
              :to="item.to"
              @click="closeMenu"
              class="text-xl font-bold text-white/70 hover:text-white transition-colors"
              active-class="text-white translate-x-2"
            >
              {{ item.name }}
            </NuxtLink>
          </nav>

          <div class="h-px bg-white/10"></div>

          <div class="space-y-5">
            <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Select Language</p>
            <div class="flex flex-wrap gap-3">
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="setLocale(lang.code as any)"
                :class="[
                  'px-5 py-2.5 text-xs font-bold rounded-2xl transition-all ring-1',
                  locale === lang.code ? 'bg-white/15 text-white ring-white/30 shadow-lg' : 'bg-white/5 text-white/40 ring-white/10 hover:text-white/60'
                ]"
              >
                {{ lang.name }}
              </button>
            </div>
          </div>

          <NuxtLink
            to="/services"
            @click="closeMenu"
            class="glass-button-primary w-full text-center block !py-4 text-[13px] uppercase tracking-[0.2em]"
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
