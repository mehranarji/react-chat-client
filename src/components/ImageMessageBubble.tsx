import { FC } from "react";
import MessageBubble from "./MessageBubble";

interface ImageMessageBubbleProps {
  name: string;
  date: Date;
  isLeft?: boolean;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  caption?: string;
}

const ImageMessageBubble: FC<ImageMessageBubbleProps> = (props) => {
  const { date, name, src, isLeft, height, width, alt, caption } = props;
  return (
    <MessageBubble isLeft={isLeft} date={date} name={name}>
      <img src={src} alt={alt} width={width} height={height} />
    </MessageBubble>
  );
};

export default ImageMessageBubble;
