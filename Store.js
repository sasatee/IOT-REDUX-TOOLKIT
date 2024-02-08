import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/detailSlice";

import { getApiCall } from "./service/ApiCall";
import userSlice from "./features/authSlice";

import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    user: userSlice.reducer,
    [getApiCall.reducerPath]: getApiCall.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getApiCall.middleware),
});
setupListeners(store.dispatch);
