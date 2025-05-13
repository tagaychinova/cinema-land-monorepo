import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './features/theme/themeSlice';
import filtersSlice from './features/filters/filtersSlice';
import { ThemeValue } from '@types';

export const makeStore = ({ theme }: { theme: ThemeValue }) => {
  return configureStore({
    reducer: {
      theme: themeSlice,
      filters: filtersSlice,
    },
    preloadedState: {
      theme: {
        value: theme,
      },
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
