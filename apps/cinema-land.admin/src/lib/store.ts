import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import productReducer from './features/product/productSlice';
import toastMessageReducer from './features/toastMessage/toastMessageSlice';
import { movieApi } from './services/movie';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      product: productReducer,
      toastMessage: toastMessageReducer,
      [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
