import { FC } from "react";
import { PrivateChat } from "../app/models/Chat";
import { useAppSelector } from "../app/hooks";
import { selectContact } from "../features/contacts/contactsSlice";
import { displayName } from "../helpers/user";

interface PrivateChatTitleProps {
  chat: PrivateChat;
}

const PrivateChatTitle: FC<PrivateChatTitleProps> = props => {
  const { chat } = props;
  const contact = useAppSelector(selectContact(chat.id));

  if (!contact) return <></>;

  return <>{displayName(contact)}</>;
};

export default PrivateChatTitle;
