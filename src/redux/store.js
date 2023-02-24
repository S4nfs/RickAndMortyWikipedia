import { configureStore } from '@reduxjs/toolkit';
import { rnmAPI } from './services/coreService';

export const store = configureStore({
  reducer: {
    [rnmAPI.reducerPath]: rnmAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rnmAPI.middleware),
});
