import type { FarmerProfile } from '~/types/farmer';

export const useFarmerProfile = () => {
  const profile = useState<FarmerProfile>('farmerProfile', () => ({
    name: '',
    state: '',
    district: '',
    landSize: 0,
    crops: [],
    irrigationSource: ''
  }));

  const updateProfile = (newData: Partial<FarmerProfile>) => {
    profile.value = { ...profile.value, ...newData };
  };

  const isProfileComplete = computed(() => {
    return profile.value.name !== '' && profile.value.state !== '' && profile.value.district !== '';
  });

  return {
    profile,
    updateProfile,
    isProfileComplete
  };
};
