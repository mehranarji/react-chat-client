import { BasicChat } from "../app/models/Chat";

export const generateMessageId = (chat: BasicChat) => {
  return Math.floor(Math.random() * 1000000)
}
