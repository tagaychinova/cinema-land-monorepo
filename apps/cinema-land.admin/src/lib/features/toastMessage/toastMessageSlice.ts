import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ToastMessage } from '@types';

const toastMessageSlice = createSlice({
  name: 'toastMessage',
  initialState: {
    value: null as ToastMessage | null,
  },
  reducers: {
    setToastMessage: (state, action: PayloadAction<ToastMessage>) => {
      state.value = { ...action.payload };
    },
    deleteToastMessage: (state) => {
      state.value = null;
    },
  },
});

export const { setToastMessage, deleteToastMessage } =
  toastMessageSlice.actions;
export default toastMessageSlice.reducer;
