import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import * as randomUser from "../../app/api/randomUser";
import User from "../../app/models/User";
import { RootState } from "../../app/store";
import { displayName } from "../../helpers/user";

export type ContactState = {
  isLoading: boolean;
  contacts: {
    [id: number]: User;
  };
};

const initialState: ContactState = {
  isLoading: false,
  contacts: {},
};

export const fetchAll = createAsyncThunk("contact/fetchAll", async () => {
  const users = await randomUser.getList();
  return users;
});

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchAll.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchAll.fulfilled, (state, { payload }) => {
      state.contacts = {};
      payload.map(user => (state.contacts[user.id] = user));
      state.isLoading = false;
    });
  },
});

export const selectContacts =
  ({ query }: { query: string }) =>
  (state: RootState) =>
    Object.values(state.contacts.contacts).filter(contact =>
      displayName(contact).toLowerCase().includes(query.toLowerCase())
    );

export const selectContact = (id: number) => (state: RootState) => {
  if (state.contacts.isLoading) {
    return null;
  }

  return state.contacts.contacts[id];
};

// Action creators are generated for each case reducer function
// export const {  } = contactSlice.actions;

export default contactSlice.reducer;
