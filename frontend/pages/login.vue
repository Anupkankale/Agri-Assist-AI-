<script setup lang="ts">
definePageMeta({
  middleware: 'guest'
})

const form = reactive({
  email: 'demo@agriassist.ai',
  password: 'password123'
})

const errorMessage = ref('')
const { login } = useAuth()

const handleSubmit = async () => {
  try {
    errorMessage.value = ''
    login(form.email, form.password)
    await navigateTo('/dashboard')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Unable to login.'
  }
}
</script>

<template>
  <section class="mx-auto max-w-lg rounded-[2rem] border border-moss/10 bg-white/85 p-8 shadow-card">
    <p class="text-sm font-semibold uppercase tracking-[0.28em] text-moss">Secure Access</p>
    <h1 class="mt-4 font-display text-4xl font-semibold text-night">Login to AgriAssist AI</h1>
    <p class="mt-4 text-slate-600">Use the prefilled demo credentials or enter any email and password to access the dashboard.</p>

    <form class="mt-8 space-y-5" @submit.prevent="handleSubmit">
      <label class="block">
        <span class="mb-2 block text-sm font-medium text-slate-700">Email</span>
        <input
          v-model="form.email"
          type="email"
          class="w-full rounded-2xl border border-moss/10 bg-white px-4 py-3 outline-none transition focus:border-moss"
          placeholder="Enter your email"
        >
      </label>

      <label class="block">
        <span class="mb-2 block text-sm font-medium text-slate-700">Password</span>
        <input
          v-model="form.password"
          type="password"
          class="w-full rounded-2xl border border-moss/10 bg-white px-4 py-3 outline-none transition focus:border-moss"
          placeholder="Enter your password"
        >
      </label>

      <p v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</p>

      <button
        type="submit"
        class="w-full rounded-full bg-night px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss"
      >
        Login
      </button>
    </form>
  </section>
</template>
