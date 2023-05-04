export type BasicMedia = {
  id: number;
  src: string;
  send_at: number;
};

export type Image = {
  type: "image";
  title?: string;
} & BasicMedia;

export type Voice = {
  type: "voice";
} & BasicMedia;

type Media = Image;

export default Media;
