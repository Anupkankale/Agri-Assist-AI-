export default defineNuxtRouteMiddleware((to, from) => {
  const { isProfileComplete } = useFarmerProfile();

  if (!isProfileComplete.value && to.path === '/results') {
    return navigateTo('/check');
  }
});
