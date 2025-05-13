export type ThemeValue = 'light' | 'dark';

export type Option = {
  id: number;
  name: string;
};

export type FilterValue = {
  genreFilter: Option[];
  ageFilter: Option | null;
  yearFilter: Option[];
};
