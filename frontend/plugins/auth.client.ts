export default defineNuxtPlugin(() => {
  const { hydrateAuth } = useAuth()
  hydrateAuth()
})
