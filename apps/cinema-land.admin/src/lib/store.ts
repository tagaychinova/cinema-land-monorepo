import { configureStore } from '@reduxjs/toolkit';
import toastMessageReducer from './features/toastMessage/toastMessageSlice';
import navbarReducer from './features/navbar/navbarSlice';
import { countryApi, genreApi } from './services';

export const makeStore = () => {
  return configureStore({
    reducer: {
      toastMessage: toastMessageReducer,
      navbar: navbarReducer,
      [countryApi.reducerPath]: countryApi.reducer,
      [genreApi.reducerPath]: genreApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        countryApi.middleware,
        genreApi.middleware,
      ]),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
