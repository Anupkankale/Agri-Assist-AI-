import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: 'https://api.agriassist.ai', // Replace with actual API base URL
  });

  return {
    provide: {
      api
    }
  };
});
