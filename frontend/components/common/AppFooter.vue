<template>
  <footer class="border-t border-moss/10 bg-night text-white">
    <div class="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-4 lg:px-8">
      <div class="lg:col-span-1">
        <div class="flex items-center gap-2">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-moss text-xs font-bold text-white">
            AA
          </div>
          <span class="font-display text-xl font-bold">AgriAssist AI</span>
        </div>
        <p class="mt-4 text-sm leading-6 text-white/70">
          Find every government scheme you qualify for in 60 seconds. Powered by Nemotron AI.
        </p>
        <p class="mt-6 text-xs font-medium text-wheat/60 uppercase tracking-widest">
          Built for Nemotron Contest 2026
        </p>
      </div>
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-wheat">Resources</p>
        <div class="mt-4 space-y-3 text-sm text-white/80 flex flex-col">
          <NuxtLink to="/" class="hover:text-wheat transition">Home</NuxtLink>
          <NuxtLink to="/check" class="hover:text-wheat transition">Check Eligibility</NuxtLink>
          <NuxtLink to="/advisory" class="hover:text-wheat transition">Weather Advisory</NuxtLink>
          <NuxtLink to="/about" class="hover:text-wheat transition">About</NuxtLink>
        </div>
      </div>
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-wheat">Social & Legal</p>
        <div class="mt-4 space-y-3 text-sm text-white/80 flex flex-col">
          <a href="https://github.com" target="_blank" class="hover:text-wheat transition">GitHub Repo</a>
          <a href="https://youtube.com" target="_blank" class="hover:text-wheat transition">YouTube Demo</a>
          <a href="#" class="hover:text-wheat transition">Privacy Policy</a>
          <a href="#" class="hover:text-wheat transition">Terms of Service</a>
        </div>
      </div>
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-wheat">Disclaimer</p>
        <p class="mt-4 text-xs leading-5 text-white/60">
          AgriAssist AI is an independent platform. Government scheme information may change. Always verify details on official portals before applying.
        </p>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-6 py-8 border-t border-white/5 lg:px-8">
      <p class="text-xs text-white/40 text-center">
        &copy; 2026 AgriAssist AI. All rights reserved. Precision Farming Hub, India.
      </p>
    </div>
  </footer>
</template>
