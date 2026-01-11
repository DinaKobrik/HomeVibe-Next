export const ALLOWED_CATEGORIES = [
  "furniture",
  "home-decoration",
  "kitchen-accessories",
  "lighting",
] as const;

export type AllowedCategory = (typeof ALLOWED_CATEGORIES)[number];
