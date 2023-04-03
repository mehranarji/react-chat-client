import { FC } from "react";
import MessageBubble, { MessageBubbleProps } from "./MessageBubble";

interface ImageMessageBubbleProps extends Omit<MessageBubbleProps, "children"> {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  caption?: string;
}

const ImageMessageBubble: FC<ImageMessageBubbleProps> = (props) => {
  const { src, height, width, alt, caption, ...messageBubbleProps } = props;
  return (
    <MessageBubble {...messageBubbleProps}>
      <figure>
        <img src={src} alt={alt} width={width} height={height} />
        {!!caption && <figcaption>{caption}</figcaption>}
      </figure>
    </MessageBubble>
  );
};

export default ImageMessageBubble;
