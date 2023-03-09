import { FC } from "react";
import MessageBubble from "./MessageBubble";

interface ImageMessageBubbleProps {
  isLeft?: boolean;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
}

const ImageMessageBubble: FC<ImageMessageBubbleProps> = (props) => {
  const { src, isLeft, height, width, alt } = props;
  return (
    <MessageBubble isLeft={isLeft}>
      <img src={src} alt={alt} width={width} height={height} />
    </MessageBubble>
  );
};

export default ImageMessageBubble;
