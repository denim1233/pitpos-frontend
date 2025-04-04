import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice.ts';
import authReducer from '../features/authSlice.ts';

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;