import type { EligibilityResult } from '~/types/scheme';

export const useEligibility = () => {
  const checkEligibility = async (farmerProfile: any, schemeId: string): Promise<EligibilityResult> => {
    // Mock API call
    return {
      schemeId,
      isEligible: Math.random() > 0.5,
      reason: 'Meets land size requirements'
    };
  };

  return {
    checkEligibility
  };
};
