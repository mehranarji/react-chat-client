import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import Chat from "../../app/models/Chat";
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
    2: {
      id: 2,
      type: "private",
      messages: [
        {
          id: 7,
          send_at: dayjs().subtract(4, "d").hour(4).valueOf(),
          contact_id: 2,
          type: "text",
          content: "Hi Mike, \nI'm fine 😁",
        },
        {
          id: 7,
          send_at: dayjs().subtract(4, "d").hour(4).valueOf(),
          contact_id: 2,
          type: "text",
          content: "How are your?",
        },
        {
          id: 6,
          send_at: dayjs().subtract(2, "d").valueOf(),
          contact_id: 1248,
          type: "text",
          content: "How Are you",
        },
        {
          id: 5,
          send_at: dayjs().subtract(1, "d").valueOf(),
          contact_id: 1248,
          type: "text",
          content: "Hello Saana",
        },
      ],
    },
    
    1: {
      id: 1,
      type: "private",
      messages: [
        {
          id: 4,
          send_at: dayjs().subtract(4, "d").valueOf(),
          contact_id: 1248,
          type: "text",
          content: "Nice new haircut",
        },
        {
          type: "image",
          id: 3,
          send_at: dayjs().subtract(4, "d").valueOf(),
          contact_id: 1248,
          src: "https://randomuser.me/api/portraits/men/27.jpg",
          content: "This is my shot"
        },
        {
          id: 2,
          send_at: dayjs().subtract(4, "d").valueOf(),
          contact_id: 1248,
          type: "text",
          content: "Hi Dude",
        },
        {
          id: 1,
          send_at: dayjs().subtract(4, "d").valueOf(),
          contact_id: 1,
          type: "text",
          content: "Hello Mike",
        },
      ],
    },

    532: {
      id: 532,
      type: "group",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
      name: "Simple Group",
      messages: [
        {
          id: 10,
          send_at: dayjs().subtract(1, "h").valueOf(),
          contact_id: 1248,
          type: "text",
          content: "my name is mike, I'm a frontend developer",
        },

        {
          id: 9,
          send_at: dayjs().subtract(1.5, "h").valueOf(),
          contact_id: 1248,
          type: "text",
          content: "Hello Guys",
        },

        {
          id: 11,
          send_at: dayjs().subtract(2, "h").valueOf(),
          contact_id: 2,
          type: "text",
          content: "Blah blah blah",
        },
      ],
      contact_ids: [1, 2, 6, 10, 14, 15, 1248],
    },

    582: {
      id: 582,
      type: "group",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Friends",
      description: "We are friends 👨‍👩‍👧‍👦",
      messages: [
        {
          id: 21351,
          send_at: dayjs().subtract(2, "h").valueOf(),
          contact_id: 7,
          type: "text",
          content: "Blah blah blah",
        },

        {
          id: 21355,
          send_at: dayjs().subtract(1, "d").valueOf(),
          contact_id: 9,
          type: "text",
          content: "Blah blah blah",
        },
      ],
      contact_ids: [7, 9, 5, 1248],
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

      state.chats[chat_id].messages.unshift(message);
    },
  },
});

export const selectChats = ({ chats }: RootState) => chats.chats;

export const selectChat =
  (id: number) =>
  ({ chats }: RootState): Chat | undefined => {
    if (chats.chats[id]) {
      return chats.chats[id];
    }

    return {
      id,
      type: "private",
      messages: [],
    };
  };

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
            displayName(contact).toLowerCase().includes(query.toLowerCase())
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

export const selectGroupMembers = (chatId: number) =>
  createSelector(
    ({ chats }: RootState) => chats.chats,
    ({ contacts }: RootState) => contacts.contacts,
    ({ user }: RootState) => user.user,
    (chats, contacts, user) => {
      const chat = chats[chatId];
      if (!chat || chat.type !== "group") {
        return [];
      }

      const result = chat.contact_ids
        .map(id => contacts[id])
        .filter(contact => contact);

      if (chat.contact_ids.includes(user.id)) {
        result.unshift(user);
      }

      return result;
    }
  );

// Action creators are generated for each case reducer function
export const { sendMessage } = contactSlice.actions;

export default contactSlice.reducer;
