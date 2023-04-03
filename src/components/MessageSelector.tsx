import { FC, useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import Message from "../app/models/Message";
import { selectContact } from "../features/contacts/contactsSlice";
import { selectUser } from "../features/users/userSlice";
import { displayName } from "../helpers/user";
import ImageMessageBubble from "./ImageMessageBubble";
import TextMessageBubble from "./TextMessageBubble";

interface MessageSelectorProps {
  message: Message;
  useAvatar?: Boolean;
}

const MessageSelector: FC<MessageSelectorProps> = (props) => {
  const { message, useAvatar = false } = props;
  const user = useAppSelector(selectUser);
  const contact = useAppSelector(selectContact(message.contact_id));

  const isUserMessage = useMemo(
    () => message.contact_id === user.id,
    [message.contact_id, user.id]
  );
  
  const name = useMemo(() => {
    if (isUserMessage) {
      return "You";
    } else if (contact) {
      return displayName(contact);
    }

    return "";
  }, [contact, message.contact_id, user.id]);

  const avatar = useMemo(() => {
    if (!useAvatar) {
      return undefined;
    }

    if (isUserMessage) {
      return user.picture?.thumbnail;
    }

    console.log(contact);
    
    return contact?.picture?.thumbnail;
  }, [contact, useAvatar, user]);

  if (message.type === "image") {
    return (
      <ImageMessageBubble
        avatar={avatar}
        name={name}
        date={message.send_at}
        isLeft={!isUserMessage}
        src={message.address}
        alt={message.caption}
        caption={message.caption}
      />
    );
  }

  if (message.type === "text") {
    return (
      <TextMessageBubble
        avatar={avatar}
        name={name}
        date={message.send_at}
        isLeft={!isUserMessage}
        text={message.content}
      />
    );
  }

  return <p>Unsupported message.</p>
};

export default MessageSelector;
