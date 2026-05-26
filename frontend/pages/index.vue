<template>
  <div class="bg-white">
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Empowering Indian Farmers with AI
          </h1>
          <p class="mt-6 text-lg leading-8 text-slate-600">
            Discover government schemes, get real-time weather advisory, and optimize your crop yield with AgriAssist AI.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink
              to="/check"
              class="rounded-md bg-moss px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-night focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
            >
              Check Eligibility
            </NuxtLink>
            <NuxtLink to="/about" class="text-sm font-semibold leading-6 text-slate-900">
              Learn more <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
