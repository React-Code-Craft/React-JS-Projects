import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import store from "../../Store";

// ✅ 1. Export the thunk so components can dispatch it
export const fetchJobs = createAsyncThunk("posts/fetchJobs", async () => {
  const response = await fetch("./jobs.json");
  return await response.json();
});


const initialState = {
  jobs: [],          // ✅ lowercase key (by convention)
  requestState: "idle",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.requestState = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.requestState = "succeeded";
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.requestState = "failed";
      });
  },
});



export default postsSlice.reducer;
