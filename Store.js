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

///template

// import { configureStore } from "@reduxjs/toolkit";
// import dataReducer from "./features/detailSlice";
// import userSlice from "./features/authSlice";

// import { setupListeners } from "@reduxjs/toolkit/query";
// import { service1Api } from "./service/Service1Api"; // Import your first RTK Query service
// import { service2Api } from "./service/Service2Api"; // Import your second RTK Query service

// export const store = configureStore({
//   reducer: {
//     data: dataReducer,
//     user: userSlice.reducer,
//     [service1Api.reducerPath]: service1Api.reducer, // Add reducerPath for the first service
//     [service2Api.reducerPath]: service2Api.reducer, // Add reducerPath for the second service
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(
//       service1Api.middleware, // Add middleware for the first service
//       service2Api.middleware // Add middleware for the second service
//     ),
// });

// setupListeners(store.dispatch);
