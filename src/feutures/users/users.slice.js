import { createSlice } from "@reduxjs/toolkit";
import { getUsers, addUser } from "./users.api";

const initialState = {
  accounts: [],
  status: ""
};

export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "Loading ...";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.accounts = action.payload;
        state.status = "";
      })
      .addCase(addUser.pending, (state) => {
        state.status = "Loading ..."
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.accounts.push(action.payload);
        state.status = " "
      });
  }
});

export const UsersReducer = UserSlice.reducer;
