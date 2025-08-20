import { PROPERTYLISTINGSAMPLE } from "@/constants/index";

export const getUniqueFilters = (): string[] => {
  const allTags = PROPERTYLISTINGSAMPLE.flatMap((property) => property.category);
  return Array.from(new Set(allTags));
};
