import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: ({ page, limit }) => {
        return {
          url: "posts",
          params: {
            _page: page,
            _limit: limit,
          },
        };
      },
    }),
    getPostsById: build.query({
      query: (id) => {
        return {
          url: `posts/${id}`,
        };
      },
    }),
  }),
});

export const { useGetPostsQuery, useGetPostsByIdQuery } = postsApi;

export const dataInStore = postsApi.endpoints.getPosts.select(0);
