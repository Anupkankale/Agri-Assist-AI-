import type { WeatherAdvisory } from '~/types/advisory';

export const useWeather = () => {
  const advisory = useState<WeatherAdvisory | null>('weatherAdvisory', () => null);
  const loading = ref(false);

  const fetchAdvisory = async (location: string) => {
    loading.value = true;
    try {
      // Mock API call
      advisory.value = {
        date: new Date().toISOString(),
        temperature: 30,
        condition: 'Sunny',
        recommendations: ['Water crops early', 'Use mulch']
      };
    } catch (error) {
      console.error('Failed to fetch weather advisory:', error);
    } finally {
      loading.value = false;
    }
  };

  return {
    advisory,
    loading,
    fetchAdvisory
  };
};
