import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import Message from "../../app/models/Message";
import { RootState } from "../../app/store";

export type MessageState = {
  chats: Record<number, Message[]>;
};

const initialState: MessageState = {
  chats: {
    1: [
      {
        id: 4,
        send_at: new Date(),
        contact_id: 0,
        type: "text",
        content: "Nice new haircut",
      },
      {
        id: 3,
        send_at: dayjs().subtract(4, "h").toDate(),
        contact_id: 0,
        type: "image",
        address: "https://randomuser.me/api/portraits/men/27.jpg",
      },
      {
        id: 2,
        send_at: new Date(),
        contact_id: 0,
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
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    sendMessage: (
      state,
      { payload }: PayloadAction<{ chat_id: number; message: Message }>
    ) => {
      const contact_messages = state.chats[payload.chat_id];
      if (contact_messages) {
        contact_messages.unshift(payload.message);
        return;
      }

      state.chats[payload.chat_id] = [payload.message];
    },
  },
});

export const selectChat =
  (id: number) =>
  ({ chats }: RootState) =>
    chats.chats[id];

// Action creators are generated for each case reducer function
export const { sendMessage } = contactSlice.actions;

export default contactSlice.reducer;
