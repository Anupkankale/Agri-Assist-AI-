<template>
  <section class="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/75 px-8 py-10 shadow-card backdrop-blur-xl lg:px-12 lg:py-14">
    <div class="absolute right-0 top-0 h-36 w-36 rounded-full bg-wheat/30 blur-3xl" />
    <div class="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-field/20 blur-3xl" />
    <div class="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-moss">Agri intelligence platform</p>
        <h1 class="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-night md:text-5xl">
          From soil data to harvest planning, all in one AI-guided workspace.
        </h1>
        <p class="mt-5 max-w-xl text-lg leading-8 text-slate-600">
          AgriAssist AI helps growers, cooperatives, and agribusiness teams improve crop health, automate monitoring,
          and act on field insights faster.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <NuxtLink
            to="/login"
            class="rounded-full bg-night px-6 py-3 text-sm font-semibold text-white transition hover:bg-moss"
          >
            Access Dashboard
          </NuxtLink>
          <NuxtLink
            to="/solutions"
            class="rounded-full border border-moss/20 px-6 py-3 text-sm font-semibold text-moss transition hover:border-moss"
          >
            Explore Solutions
          </NuxtLink>
        </div>
      </div>

      <div class="grid gap-4 rounded-[1.75rem] bg-night p-5 text-white shadow-2xl">
        <div class="rounded-2xl bg-white/10 p-4">
          <p class="text-sm text-white/70">Crop Health Accuracy</p>
          <p class="mt-2 font-display text-4xl font-semibold">94%</p>
        </div>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
          <div class="rounded-2xl bg-white/10 p-4">
            <p class="text-sm text-white/70">Irrigation Savings</p>
            <p class="mt-2 text-2xl font-semibold">-21%</p>
          </div>
          <div class="rounded-2xl bg-white/10 p-4">
            <p class="text-sm text-white/70">Active Farm Sites</p>
            <p class="mt-2 text-2xl font-semibold">1,280</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
