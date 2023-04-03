import { FC } from "react";
import MessageBubble, { MessageBubbleProps } from "./MessageBubble";

interface TextMessageBubbleProps extends Omit<MessageBubbleProps, "children"> {
  text?: string;
  avatar?: string;
}

const TextMessageBubble: FC<TextMessageBubbleProps> = (props) => {
  const { text, ...messageBubbleProps } = props;
  return (
    <MessageBubble
      {...messageBubbleProps}
    >
      <p className="p-4">{text}</p>
    </MessageBubble>
  );
};

export default TextMessageBubble;
