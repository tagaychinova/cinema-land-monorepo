import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  name: string;
}

const productSlice = createSlice({
  name: 'product',
  initialState: {
    name: '',
  },
  reducers: {
    initializeProduct: (state, action: PayloadAction<Product>) => {
      state.name = action.payload.name;
    },
    setProductName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { initializeProduct, setProductName } = productSlice.actions;
export default productSlice.reducer;
