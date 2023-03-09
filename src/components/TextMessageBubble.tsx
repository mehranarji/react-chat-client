import { FC } from "react";
import MessageBubble from "./MessageBubble";

interface TextMessageBubbleProps {
  isLeft?: Boolean;
  text?: String;
}

const TextMessageBubble: FC<TextMessageBubbleProps> = (props) => {
  const { text, isLeft } = props;
  return (
    <MessageBubble isLeft={isLeft}>
      <p className="p-4">{text}</p>
    </MessageBubble>
  );
};

export default TextMessageBubble;
