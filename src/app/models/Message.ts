type TextMessage = {
  type: "text";
  content: string;
};

type ImageMessage = {
  type: "image";
  address: string;
  caption?: string;
};

type VoiceMessage = {
  type: "voice";
  address: string;
  caption?: string;
};

type Message = {
  id: number;
  contact_id: number;
  send_at: Date;
  seen_at?: Date;
} & (TextMessage | ImageMessage | VoiceMessage);

export default Message;
