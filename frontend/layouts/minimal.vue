<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
    <header class="border-b bg-white py-4 shadow-sm">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-moss text-xs font-bold text-white">
            AA
          </div>
          <span class="font-display font-bold">AgriAssist AI</span>
        </NuxtLink>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
