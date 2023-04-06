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
  message: Message;
}

const ContactMessage: FC<ContactMessageProps> = props => {
  const { message } = props;
  const user = useAppSelector(selectContact(message.contact_id));

  if (!user) {
    return <></>;
  }

  return (
    <div className={clsx("flex items-start gap-4", "flex-row")}>
      <UserAvatar
        src={user.picture?.thumbnail}
        className="w-14"
        alt={displayName(user)}
      />

      <div className={clsx("flex flex-col flex-1", "items-start")}>
        <p className={clsx("flex flex-row items-baseline gap-2 mb-2")}>
          <MessageName name={displayName(user)} />
          <MessageDate date={new Date(message.send_at)} />
        </p>

        <ContactMessageBubble>
          <MessageSelector message={message} />
        </ContactMessageBubble>
      </div>
      <div className="w-14"></div>
    </div>
  );
};

export default ContactMessage;
