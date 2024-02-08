import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://iot-api-theta.vercel.app/api/v1",
});

export const getApiCall = createApi({
  baseQuery,
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
    fetchProductById: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),
    addNewPost: builder.mutation({
      query: (data) => ({
        url: "products",
        method: "POST",
        body: JSON.stringify(data),
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchDataQuery,
  useFetchProductByIdQuery,
  useAddNewPostMutation,
  useDeletePostMutation,
} = getApiCall;
