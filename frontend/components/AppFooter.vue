<template>
  <footer class="border-t border-moss/10 bg-night text-white">
    <div class="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-3 lg:px-8">
      <div>
        <p class="font-display text-xl font-semibold">AgriAssist AI</p>
        <p class="mt-3 max-w-sm text-sm leading-6 text-white/70">
          AI-powered crop monitoring, resource planning, and farm decision support for modern agriculture teams.
        </p>
      </div>
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-wheat">Core Pages</p>
        <div class="mt-3 space-y-2 text-sm text-white/80">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/services">Services</NuxtLink>
          <NuxtLink to="/solutions">Solutions</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
      </div>
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-wheat">Contact</p>
        <div class="mt-3 space-y-2 text-sm text-white/80">
          <p>support@agriassist.ai</p>
          <p>+1 (800) 555-AGRI</p>
          <p>Precision Farming Hub, California</p>
        </div>
      </div>
    </div>
  </footer>
</template>
