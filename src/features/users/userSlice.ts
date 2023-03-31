import { createSlice } from "@reduxjs/toolkit";
import User from "../../app/models/User";
import { RootState } from "../../app/store";

export type UserState = {
  user: User
};

const initialState: UserState = {
  user: {
    id: 1248,
    first_name: "Mike",
    last_name: "Shinoda",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectUser = (state: RootState) => state.user.user;

// Action creators are generated for each case reducer function
// export const {  } = contactSlice.actions;

export default userSlice.reducer;
