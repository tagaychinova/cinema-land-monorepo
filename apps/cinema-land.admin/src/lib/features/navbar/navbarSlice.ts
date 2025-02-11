import { createSlice } from '@reduxjs/toolkit';
import { Navbar } from '@types';

const initialState: Navbar = {
  isOpened: true,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      state.isOpened = !state.isOpened;
    },
  },
});

export const { toggleNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
