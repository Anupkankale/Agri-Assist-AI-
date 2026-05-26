<script setup lang="ts">
const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Check Eligibility', to: '/check' },
  { name: 'Advisory', to: '/advisory' },
  { name: 'About', to: '/about' }
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
      <NuxtLink to="/" class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-night text-lg font-bold text-white">
          AA
        </div>
        <div>
          <p class="font-display text-lg font-semibold">AgriAssist AI</p>
          <p class="text-sm text-slate-600">Smarter farming operations</p>
        </div>
      </NuxtLink>

      <nav class="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="transition hover:text-moss"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <NuxtLink
          to="/check"
          class="rounded-full bg-moss px-4 py-2 text-sm font-semibold text-white transition hover:bg-night"
        >
          Get Started
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
