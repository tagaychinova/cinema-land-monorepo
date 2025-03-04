import { configureStore } from '@reduxjs/toolkit';
import toastMessageReducer from './features/toastMessage/toastMessageSlice';
import navbarReducer from './features/navbar/navbarSlice';
import { movieApi } from './services/movie';

export const makeStore = () => {
  return configureStore({
    reducer: {
      toastMessage: toastMessageReducer,
      navbar: navbarReducer,
      [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
