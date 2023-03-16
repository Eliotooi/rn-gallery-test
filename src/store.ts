import { configureStore } from '@reduxjs/toolkit';
import { photosApi } from './api/photos';

export const store = configureStore({
  devTools: true,
  reducer: {
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(photosApi.middleware),
});
