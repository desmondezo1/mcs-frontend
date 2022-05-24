import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_APP_URL,
  prepareHeaders: (headers) => {
    headers.set("Access-Control-Allow-Origin", "*");
    
    const user = localStorage.getItem(`${process.env.NEXT_PUBLIC_STORAGE_KEY}`);
    if (user) headers.set("Authorization", `${JSON.parse(user).access_token}`);
    return headers;
  },
});

const api = createApi({
  baseQuery,
  tagTypes: ["User", "Auth"],
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
  }),
});

export default api;
