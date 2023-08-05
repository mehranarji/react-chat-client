import clsx from "clsx";
import { FC } from "react";
import { useAppSelector } from "../app/hooks";
import Message from "../app/models/Message";
import { selectContact } from "../features/contacts/contactsSlice";
import { displayName } from "../helpers/user";
import MessageDate from "./MessageDate";
import MessageName from "./MessageName";
import MessageSelector from "./MessageSelector";
import UserAvatar from "./UserAvatar";
import ContactMessageBubble from "./ContactMessageBubble";

interface ContactMessageProps {
  messages: Message[];
}

const ContactMessage: FC<ContactMessageProps> = props => {
  const { messages } = props;
  const user = useAppSelector(selectContact(messages[0].contact_id));

  if (!user) {
    return <></>;
  }

  return (
    <div className={clsx("flex items-start gap-4", "flex-row")}>
      <UserAvatar
        src={user.picture?.thumbnail}
        className="w-12"
        alt={displayName(user)}
      />

      <div className={clsx("flex flex-col flex-1", "items-start")}>
        <p className={clsx("flex flex-row items-baseline gap-2 mb-2")}>
          <MessageName name={displayName(user)} />
          <MessageDate date={new Date(messages[0].send_at)} />
        </p>

        <div className="flex flex-col gap-1 items-start">
          {messages.map(message => (
            <ContactMessageBubble key={message.id}>
              <MessageSelector message={message} />
            </ContactMessageBubble>
          ))}
        </div>
      </div>
      <div className="w-14"></div>
    </div>
  );
};

export default ContactMessage;
