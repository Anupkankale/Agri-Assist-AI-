import type { Scheme } from '~/types/scheme';

export const formatSchemeResponse = (data: any): Scheme => {
  return {
    id: data.id || '',
    name: data.name || '',
    description: data.description || '',
    benefits: data.benefits || [],
    eligibilityCriteria: data.eligibilityCriteria || [],
    documentsRequired: data.documentsRequired || [],
    category: data.category || ''
  };
};
