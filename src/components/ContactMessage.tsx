import { FC, useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import Message from "../app/models/Message";
import { selectContact } from "../features/contacts/contactsSlice";
import { selectUser } from "../features/users/userSlice";
import { displayName } from "../helpers/user";
import ImageMessageBubble from "./ImageMessageBubble";
import TextMessageBubble from "./TextMessageBubble";

interface ContactMessageProps {
  message: Message;
}

const ContactMessage: FC<ContactMessageProps> = (props) => {
  const { message } = props;
  const user = useAppSelector(selectUser);
  const contact = useAppSelector(selectContact(message.contact_id));

  const name = useMemo(() => {
    if (message.contact_id === user.id) {
      return "You";
    } else if (contact) {
      return displayName(contact);
    }

    return "";
  }, [contact, message.contact_id, user.id]);

  const isLeft = useMemo(
    () => message.contact_id !== user.id,
    [message.contact_id, user.id]
  );

  if (message.type === "image") {
    return (
      <ImageMessageBubble
        name={name}
        isLeft={isLeft}
        date={message.send_at}
        src={message.address}
        alt={message.caption}
        caption={message.caption}
      />
    );
  }

  if (message.type === "text") {
    return (
      <TextMessageBubble
        name={name}
        date={message.send_at}
        isLeft={isLeft}
        text={message.content}
      />
    );
  }

  return <p>Unsupported message.</p>
};

export default ContactMessage;
