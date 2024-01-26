import { createSlice } from "@reduxjs/toolkit";
import { puppyBowlApi } from "../api/puppyBowlApi";

const playerSlice = createSlice({
  name: "playerSlice",
  initialState: { players: [], player: null },
  reducers: {
    setPlayer: (state, action) => {
      state.player = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      puppyBowlApi.endpoints.getPlayers.matchFulfilled,
      (state, { payload }) => {
        return { ...state, players: payload.data.players };
      }
    );
    builder.addMatcher(
      puppyBowlApi.endpoints.getPlayer.matchFulfilled,
      (state, { payload }) => {
        return { ...state, player: payload.data.player };
      }
    );
    builder.addMatcher(
      puppyBowlApi.endpoints.newPlayer.matchFulfilled,
      (state, { payload }) => {
        state.players.push(payload.data.newPlayer);
        return state;
      }
    );
    builder.addMatcher(
      puppyBowlApi.endpoints.deletePlayer.matchFulfilled,
      (state, { payload }) => {
        state.players = state.players.filter(
          (player) => player.id !== state.player.id
        );
        state.player = null;
        return state;
      }
    );
  },
});

export default playerSlice.reducer;
export const { setPlayer } = playerSlice.actions;
