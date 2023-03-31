import { FC } from "react";
import { useAppSelector } from "../app/hooks";
import { PrivateChat } from "../app/models/Chat";
import { selectContact } from "../features/contacts/contactsSlice";
import ChatListItem from "./ChatListItem";

interface PrivateChatListItemProps {
  chat: PrivateChat;
  className?: string;
}

const PrivateChatListItem: FC<PrivateChatListItemProps> = (props) => {
  const { className, chat } = props;
  const contact = useAppSelector(selectContact(chat.id))

  if (!contact) {
    return <></>;
  }

  return (
    <ChatListItem 
      name={`${contact.first_name} ${contact.last_name}`}
      className={className}
      avatar={contact.picture?.thumbnail}
      message={chat.messages?.[0]}
    />
  );
};

export default PrivateChatListItem;
