import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const GREETING_URL = 'http://127.0.0.1:3000/greeting';


export const fetchUserData = createAsyncThunk("user/fetchUserData", () => {
    return axios
      .get(GREETING_URL)
      .then((response) => {
       console.log(response) 
      })
  }
);

  const userSlice = createSlice({
    name: "user",
    initialState: {
      data: null,
      status: "idle",
      error: null,
    },
   
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserData.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchUserData.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.data = action.payload;
        })
        .addCase(fetchUserData.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    },
  });
  
  export default userSlice.reducer;
