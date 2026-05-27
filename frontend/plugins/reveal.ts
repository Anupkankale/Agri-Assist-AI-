export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    nuxtApp.vueApp.directive('reveal', {
      mounted(el, binding) {
        el.classList.add('reveal');
        if (binding.modifiers.stagger) {
          el.classList.add('reveal-stagger');
        }
        observer.observe(el);
      },
      unmounted(el) {
        observer.unobserve(el);
      },
      getSSRProps() {
        return {}
      }
    });
  } else {
    // For SSR, just register a no-op directive to prevent errors
    nuxtApp.vueApp.directive('reveal', {
      getSSRProps() {
        return {}
      }
    });
  }
});
