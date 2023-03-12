import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ApiResponse from "../../data/ApiResponse";
import User from "../../data/User";

export type ContactState = {
  contacts: User[] | null;
};

const initialState: ContactState = {
  contacts: null,
};

export const fetchAll = createAsyncThunk("contact/fetchAll", async () => {
  const { data } = await axios.get<ApiResponse<User[]>>(
    "https://randomuser.me/api/?results=50&nat=EN"
  );

  return data.results;
});

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state, { payload }) => {
      state.contacts = payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {  } = contactSlice.actions;

export default contactSlice.reducer;
