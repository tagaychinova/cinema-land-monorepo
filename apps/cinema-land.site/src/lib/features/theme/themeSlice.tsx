import { createSlice } from '@reduxjs/toolkit';
import { ThemeValue } from '@types';
import { setInitialThemeValue } from '@utils';

const defaultTheme: ThemeValue = 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: defaultTheme as ThemeValue,
  },
  reducers: {
    toggleTheme: (state) => {
      const theme = state.value === 'light' ? 'dark' : 'light';
      state.value = theme;
      setInitialThemeValue(theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
