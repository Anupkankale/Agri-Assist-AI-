export interface Scheme {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  eligibilityCriteria: string[];
  documentsRequired: string[];
  category: string;
}

export interface EligibilityResult {
  schemeId: string;
  isEligible: boolean;
  reason?: string;
}
