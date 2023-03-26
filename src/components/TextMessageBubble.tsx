import { FC } from "react";
import MessageBubble, { MessageBubbleProps } from "./MessageBubble";

interface TextMessageBubbleProps extends Omit<MessageBubbleProps, "children"> {
  text?: string;
}

const TextMessageBubble: FC<TextMessageBubbleProps> = (props) => {
  const { text, ...rest } = props;
  return (
    <MessageBubble
      {...rest}
    >
      <p className="p-4">{text}</p>
    </MessageBubble>
  );
};

export default TextMessageBubble;
