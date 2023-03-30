import { configureStore } from '@reduxjs/toolkit';
import chats from "../features/chats/chatsSlice";
import contacts from "../features/contacts/contactsSlice";

export const store = configureStore({
  reducer: {
    contacts,
    chats,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch