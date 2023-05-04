import { BasicChat } from "../app/models/Chat";
import Media from "../app/models/Media";
import { isMedia } from "./message";

export const generateMessageId = (chat: BasicChat) => {
  return Math.floor(Math.random() * 1000000);
};

export const getMediaList = (chat: BasicChat): Media[] => {
  return chat.messages.filter(isMedia).map(message => ({
    type: "image",
    id: message.id,
    send_at: message.send_at,
    title: message.content,
    src: message.src,
  }));
};
