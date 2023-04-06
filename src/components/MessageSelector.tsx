import { FC, useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import Message from "../app/models/Message";
import { selectContact } from "../features/contacts/contactsSlice";
import { selectUser } from "../features/users/userSlice";
import { displayName } from "../helpers/user";
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
        src={message.address}
        alt={message.caption}
        caption={message.caption}
      />
    );
  }

  if (message.type === "text") {
    return <TextMessage text={message.content} />;
  }

  return <p>Unsupported message.</p>;
};

export default MessageSelector;
