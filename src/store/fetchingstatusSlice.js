import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markfetchDone: (state) => {
      state.fetchDone = true;
    },
    markfetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingDone: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
