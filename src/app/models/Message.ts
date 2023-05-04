import { Image, Voice } from "./Media";

export type BasicMessage = {
  id: number;
  contact_id: number;
  send_at: number;
  seen_at?: number;
};

export type TextMessage = {
  type: "text";
  content: string;
} & BasicMessage;

export type ImageMessage = {
  type: "image";
  src: Image["src"];
  content?: string;
} & BasicMessage;

export type VoiceMessage = {
  type: "voice";
  src: Voice["src"];
  content?: string;
} & BasicMessage;

type Message = TextMessage | ImageMessage | VoiceMessage;

export default Message;
