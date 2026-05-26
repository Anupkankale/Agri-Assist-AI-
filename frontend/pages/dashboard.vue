<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const { user, logout } = useAuth()

const metrics = [
  { title: 'Active Farms', value: '128', detail: 'Farm operations monitored across connected regions.' },
  { title: 'Irrigation Alerts', value: '14', detail: 'Open actions requiring review in the next 24 hours.' },
  { title: 'Yield Projection', value: '18.2k t', detail: 'Forecasted output across the current growing cycle.' }
]

const nextTasks = [
  'Review moisture variance in North Valley plots.',
  'Approve irrigation schedule changes for greenhouse cluster B.',
  'Send crop stress summary to regional agronomy leads.'
]

const handleLogout = async () => {
  logout()
  await navigateTo('/login')
}
</script>

<template>
  <section class="space-y-8">
    <div class="rounded-[2rem] border border-moss/10 bg-white/85 p-8 shadow-card">
      <p class="text-sm font-semibold uppercase tracking-[0.28em] text-moss">Dashboard</p>
      <div class="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 class="font-display text-4xl font-semibold text-night">Welcome back{{ user?.email ? `, ${user.email}` : '' }}</h1>
          <p class="mt-3 max-w-2xl text-slate-600">
            Monitor field performance, respond to risk signals, and coordinate farm operations from one place.
          </p>
        </div>
        <button
          class="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          @click="handleLogout"
        >
          Logout
        </button>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <StatCard
        v-for="metric in metrics"
        :key="metric.title"
        :title="metric.title"
        :value="metric.value"
        :detail="metric.detail"
      />
    </div>

    <div class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-[2rem] border border-moss/10 bg-white/85 p-8 shadow-card">
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-moss">Overview</p>
        <h2 class="mt-4 font-display text-3xl font-semibold text-night">Today’s farm operations snapshot</h2>
        <div class="mt-6 grid gap-4 md:grid-cols-2">
          <div class="rounded-2xl bg-mist p-5">
            <p class="text-sm text-slate-500">Soil Moisture Stability</p>
            <p class="mt-2 text-2xl font-semibold text-night">82%</p>
          </div>
          <div class="rounded-2xl bg-mist p-5">
            <p class="text-sm text-slate-500">Disease Risk Flags</p>
            <p class="mt-2 text-2xl font-semibold text-night">Low to Moderate</p>
          </div>
          <div class="rounded-2xl bg-mist p-5">
            <p class="text-sm text-slate-500">Field Teams Active</p>
            <p class="mt-2 text-2xl font-semibold text-night">26</p>
          </div>
          <div class="rounded-2xl bg-mist p-5">
            <p class="text-sm text-slate-500">Weather Watch</p>
            <p class="mt-2 text-2xl font-semibold text-night">Wind advisory</p>
          </div>
        </div>
      </div>

      <div class="rounded-[2rem] border border-moss/10 bg-night p-8 text-white shadow-card">
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-wheat">Next Tasks</p>
        <div class="mt-6 space-y-4">
          <div
            v-for="task in nextTasks"
            :key="task"
            class="rounded-2xl bg-white/10 p-4 text-sm leading-6 text-white/85"
          >
            {{ task }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
