import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import productReducer from './features/product/productSlice';
import { movieApi } from './services/movie';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      product: productReducer,
      [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
