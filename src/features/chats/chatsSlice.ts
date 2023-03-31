import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import Chat, { BasicChat } from "../../app/models/Chat";
import Message from "../../app/models/Message";
import { RootState } from "../../app/store";
import { displayName } from "../../helpers/user";

export type ChatState = {
  chats: {
    [chat_id: number]: Chat;
  };
};

const initialState: ChatState = {
  chats: {
    1: {
      id: 1,
      type: "private",
      messages: [
        {
          id: 4,
          send_at: new Date(),
          contact_id: 1248,
          type: "text",
          content: "Nice new haircut",
        },
        {
          id: 3,
          send_at: dayjs().subtract(4, "h").toDate(),
          contact_id: 1248,
          type: "image",
          address: "https://randomuser.me/api/portraits/men/27.jpg",
        },
        {
          id: 2,
          send_at: new Date(),
          contact_id: 1248,
          type: "text",
          content: "Hi Dude",
        },
        {
          id: 1,
          send_at: new Date(),
          contact_id: 1,
          type: "text",
          content: "Hello Mike",
        },
      ],
    },

    2: {
      id: 2,
      type: "private",
      messages: [
        {
          id: 7,
          send_at: new Date(),
          contact_id: 2,
          type: "text",
          content: "Hi Mike, I'm fine 😁",
        },
        {
          id: 6,
          send_at: new Date(),
          contact_id: 1248,
          type: "text",
          content: "How Are you",
        },
        {
          id: 5,
          send_at: new Date(),
          contact_id: 1248,
          type: "text",
          content: "Hello Saana",
        },
      ],
    },
  },
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    sendMessage: (
      state,
      {
        payload: { chat_id, message },
      }: PayloadAction<{ chat_id: number; message: Message }>
    ) => {
      // Chat not found
      if (!state.chats[chat_id]) {
        state.chats[chat_id] = {
          id: chat_id,
          type: "private",
          messages: [message],
        };
        return;
      }

      state.chats[chat_id].messages?.unshift(message);
    },
  },
});

export const selectChats = ({ chats }: RootState) => chats.chats;

export const selectChat =
  (id: number) =>
  ({ chats }: RootState): BasicChat =>
    chats.chats[id];

export const selectFilteredChats = ({ query }: { query: string }) =>
  createSelector(
    ({ chats }: RootState) => chats.chats,
    ({ contacts }: RootState) => contacts.contacts,
    (chats, contacts) => {
      const result: typeof chats = {};

      Object.entries(chats).forEach(([id, chat]) => {
        if (chat.type === "private") {
          const contact = contacts[chat.id];

          if (
            contact &&
            displayName(contact)
              .toLowerCase()
              .includes(query.toLowerCase())
          ) {
            result[chat.id] = chat;
          }

          return;
        }

        if (chat.name.toLowerCase().includes(query.toLowerCase())) {
          result[chat.id] = chat;
        }
      });

      return result;
    }
  );

// Action creators are generated for each case reducer function
export const { sendMessage } = contactSlice.actions;

export default contactSlice.reducer;
