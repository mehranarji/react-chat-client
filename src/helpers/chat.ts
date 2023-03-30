import Chat from "../app/models/Chat";
import User from "../app/models/User";
import { findContactById } from "./contact";

export const getChatName = (chat: Chat, contacts: User[]) => {
  if (chat.type === "group") return chat.name;

  const contact = findContactById(chat.id, contacts);
  
};
