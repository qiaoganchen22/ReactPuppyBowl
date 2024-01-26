import { configureStore } from "@reduxjs/toolkit";
import { puppyBowlApi } from "../api/puppyBowlApi";
import playerSlice from "../components/PlayerSlice";

export const store = configureStore({
  reducer: {
    playerSlice,
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer, //api reducers always have to add to store
  },
  middleware: (getDefaultMiddleware) => //allows you to use is loading
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});
