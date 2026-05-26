export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn, hydrateAuth } = useAuth()
  hydrateAuth()

  if (!isLoggedIn.value) {
    return navigateTo('/login')
  }
})
