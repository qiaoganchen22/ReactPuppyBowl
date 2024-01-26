import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2311-FSA-ET-WEB-FT-SF/",
  }),
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => "players",
    }),
    getPlayer: builder.query({
      query: (id) => "players/" + id,
    }),
    newPlayer: builder.mutation({
      query: (body) => ({
        url: "players",
        method: "POST",
        body: body,
      }),
    }),
    deletePlayer: builder.mutation({
      query: (id) => ({
        url: "players/" + id,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPlayersQuery,
  useGetPlayerQuery,
  useNewPlayerMutation,
  useDeletePlayerMutation,
} = puppyBowlApi;
