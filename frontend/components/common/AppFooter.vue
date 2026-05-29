<template>
  <footer class="border-t border-white/10 bg-night text-white overflow-hidden">
    <div class="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-8">
      <!-- Column 1: Brand -->
      <div class="lg:col-span-1 space-y-6">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:bg-moss/40 group-hover:ring-moss/50 transition-all duration-500">
            <span class="text-xs font-bold text-white">AA</span>
          </div>
          <span class="font-display text-xl font-bold">AgriAssist AI</span>
        </NuxtLink>
        <p class="text-sm leading-6 text-white/60">
          Find every government scheme you qualify for in 60 seconds. Powered by Advanced NVIDIA AI.
        </p>
      </div>

      <!-- Column 2: Resources -->
      <div class="space-y-6">
        <p class="text-[10px] font-bold uppercase tracking-[0.25em] text-wheat">Resources</p>
        <div class="space-y-4 text-sm text-white/50 flex flex-col">
          <NuxtLink to="/" class="hover:text-wheat transition-colors">Home</NuxtLink>
          <NuxtLink to="/services" class="hover:text-wheat transition-colors">Services</NuxtLink>
          <NuxtLink to="/advisory" class="hover:text-wheat transition-colors">Weather Advisory</NuxtLink>
          <NuxtLink to="/about" class="hover:text-wheat transition-colors">About</NuxtLink>
        </div>
      </div>

      <!-- Column 3: Social & Legal -->
      <div class="space-y-6">
        <p class="text-[10px] font-bold uppercase tracking-[0.25em] text-wheat">Social & Legal</p>
        <div class="space-y-4 text-sm text-white/50 flex flex-col">
          <a href="https://github.com" target="_blank" class="hover:text-wheat transition-colors">GitHub Repo</a>
          <a href="https://youtube.com" target="_blank" class="hover:text-wheat transition-colors">YouTube Demo</a>
          <a href="#" class="hover:text-wheat transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-wheat transition-colors">Terms of Service</a>
        </div>
      </div>

      <!-- Column 4: Sponsorship -->
      <div class="space-y-6">
        <p class="text-[10px] font-bold uppercase tracking-[0.25em] text-wheat">Support Our Mission</p>
        <div class="space-y-4">
          <p class="text-xs leading-relaxed text-white/60">
            We aim to keep AgriAssist AI free for every farmer in the country. To maintain and scale this system, we welcome transparent sponsorship from brands.
          </p>
          <a href="https://anupkankale.com" target="_blank" class="inline-flex items-center text-[10px] font-bold text-wheat hover:text-white transition-colors group">
            BECOME A SPONSOR
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Attribution -->
    <div class="mx-auto max-w-7xl px-6 py-10 border-t border-white/5 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-center gap-4 text-[11px] text-white/30">
        <p>
          &copy; 2026 AgriAssist AI. Made with ❤️ for the 
          <a href="https://anupkankale.com" target="_blank" class="text-wheat font-bold hover:text-white transition-colors ml-1">anupkankale</a>.
        </p>
      </div>
    </div>
  </footer>
</template>
