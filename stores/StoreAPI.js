import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_APP_URL,
  prepareHeaders: (headers) => {
    headers.set("Access-Control-Allow-Origin", "*");

    const token = Cookies.get("token");

    // const token = localStorage.getItem(`${process.env.NEXT_PUBLIC_STORAGE_KEY}`);
    if (token !== undefined && token !== null && token !== "undefined")
      headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

const api = createApi({
  baseQuery,
  tagTypes: ["User", "Auth", "Shop"],
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    login: builder.mutation({
      query(body) {
        return {
          url: `login`,
          method: "POST",
          body,
        };
      },
      providesTags: () => [{ type: "Auth" }],
    }),
    register: builder.mutation({
      query(body) {
        return {
          url: `register`,
          method: "POST",
          body,
        };
      },
      providesTags: () => [{ type: "Auth" }],
    }),

    addToCart: builder.mutation({
      query(body) {
        return {
          url: "addToCart",
          method: "POST",
          body,
        };
      },
      providesTags: () => [{ type: "Shop" }],
    }),
  }),
});

export default api;
