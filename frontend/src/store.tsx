import { configureStore } from "@reduxjs/toolkit";

import { invoiceApi } from "./features/api/invoicesApi";

export const store = configureStore({
  reducer: {
    [invoiceApi.reducerPath]: invoiceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(invoiceApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
