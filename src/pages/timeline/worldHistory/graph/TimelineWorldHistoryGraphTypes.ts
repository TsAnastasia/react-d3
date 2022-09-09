export const sortingTypes = ["time", "region"] as const;
export type SortingType = typeof sortingTypes[number];
