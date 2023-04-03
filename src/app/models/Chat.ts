import Message from "./Message";

export type BasicChat = {
  id: number;
  messages?: Message[];
};

export type GroupChat = {
  type: "group";
  name: string;
  image: string;
  contact_ids: number[];
  description?: string;
} & BasicChat;

export type PrivateChat = {
  type: "private";
} & BasicChat;

type Chat = GroupChat | PrivateChat;

export default Chat;
