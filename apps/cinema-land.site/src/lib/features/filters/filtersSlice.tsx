import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterValue, Option } from '@types';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    genreFilter: [],
    ageFilter: null,
    yearFilter: [],
  } as FilterValue,
  reducers: {
    setGenreFilter: (state, action: PayloadAction<Option[]>) => {
      state.genreFilter = [...action.payload];
    },
    closeGenreFilter: (state, action: PayloadAction<number>) => {
      state.genreFilter = state.genreFilter.filter(
        ({ id }) => id !== action.payload,
      );
    },
    setYearFilter: (state, action: PayloadAction<Option[]>) => {
      state.yearFilter = [...action.payload];
    },
    closeYearFilter: (state, action: PayloadAction<number>) => {
      state.yearFilter = state.yearFilter.filter(
        ({ id }) => id !== action.payload,
      );
    },
    setAgeFilter: (state, action: PayloadAction<Option | null>) => {
      state.ageFilter = action.payload === null ? null : { ...action.payload };
    },
    closeAgeFilter: (state) => {
      state.ageFilter = null;
    },
  },
});

export const {
  setGenreFilter,
  closeGenreFilter,
  setYearFilter,
  closeYearFilter,
  setAgeFilter,
  closeAgeFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
