import type { Scheme } from '~/types/scheme';

export const useSchemes = () => {
  const schemes = useState<Scheme[]>('schemes', () => []);
  const loading = ref(false);

  const fetchSchemes = async () => {
    loading.value = true;
    try {
      // Mock API call
      const response = await $fetch('/api/schemes');
      schemes.value = response as Scheme[];
    } catch (error) {
      console.error('Failed to fetch schemes:', error);
    } finally {
      loading.value = false;
    }
  };

  const getSchemeById = (id: string) => {
    return schemes.value.find(s => s.id === id);
  };

  return {
    schemes,
    loading,
    fetchSchemes,
    getSchemeById
  };
};
