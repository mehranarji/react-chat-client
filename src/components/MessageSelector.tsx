import { FC } from "react";
import Message from "../app/models/Message";
import ImageMessage from "./ImageMessage";
import TextMessage from "./TextMessage";
interface MessageSelectorProps {
  message: Message;
}

const MessageSelector: FC<MessageSelectorProps> = props => {
  const { message } = props;

  if (message.type === "image") {
    return (
      <ImageMessage
        src={message.src}
        alt={message.content}
        caption={message.content}
      />
    );
  }

  if (message.type === "text") {
    return <TextMessage text={message.content} />;
  }

  return <p>Unsupported message.</p>;
};

export default MessageSelector;
