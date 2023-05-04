import Message, { ImageMessage } from "../app/models/Message";

export const isMedia = (message: Message): message is ImageMessage =>
  message.type === "image";
