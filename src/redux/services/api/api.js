import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({ query: () => "/restaurants" }),
    getRestaurantById: builder.query({ query: (id) => `/restaurant/${id}` }),
    getRestaurantReviews: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: (restaurantId, reviewId) => [{ type: "Reviews", restaurantId },{ type: "Reviews", reviewId } ],
    }),
    getDishes: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getDishById: builder.query({ query: (dishId) => `/dish/${dishId}` }),
    getUsers: builder.query({ query: () => "/users" }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        method: "POST",
        body: review,
        url: `/review/${restaurantId}`,
      }),
      invalidatesTags: ({ restaurantId }) => [
        { type: "Reviews", restaurantId },
      ], //при добавлении отзыва происходит fetch сервера и динамическое обновление компонента с отзывами
    }),
    editReview: builder.mutation({
        query: ({ id, review }) => ({
          method: "PATCH",
          body: review,
          url: `/review/${id}`,
        }),
        invalidatesTags: ({ reviewId }) => [
          { type: "Reviews", reviewId },
        ],
      }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useAddReviewMutation,
  useGetRestaurantByIdQuery,
  useGetRestaurantReviewsQuery,
  useGetUsersQuery,
  useGetDishesQuery,
  useGetDishByIdQuery,
  useEditReviewMutation
} = apiSlice;
