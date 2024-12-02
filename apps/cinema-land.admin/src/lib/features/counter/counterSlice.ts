import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    initializeCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { initializeCount } = counterSlice.actions;
export default counterSlice.reducer;
