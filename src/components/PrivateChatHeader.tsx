import {
  EllipsisHorizontalCircleIcon,
  PhoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { FC } from "react";
import ChatHeader from "./ChatHeader";
import UserAvatar from "./UserAvatar";
import { PrivateChat } from "../app/models/Chat";
import { useAppSelector } from "../app/hooks";
import { selectContact } from "../features/contacts/contactsSlice";
import { displayName } from "../helpers/user";
import ContactStatus from "./ContactStatus";

interface PrivateChatHeaderProps {
  chat: PrivateChat;
}

const PrivateChatHeader: FC<PrivateChatHeaderProps> = (props) => {
  const { chat } = props;
  const contact = useAppSelector(selectContact(chat.id));

  if (!contact) {
    return <></>
  }
  
  return (
    <ChatHeader>
      <UserAvatar className="h-full mr-4" src={contact?.picture?.large} />

      <div>
        <p className="font-medium text-lg">{displayName(contact)}</p>
        <p><ContactStatus status={contact.status} /></p>
      </div>

      <div className="ml-auto flex gap-1">
        <button className="text-neutral-400 hover:text-neutral-600 transition-colors p-3">
          <VideoCameraIcon className="w-5 h-5" />
        </button>

        <button className="text-neutral-400 hover:text-neutral-600 transition-colors p-3">
          <PhoneIcon className="w-5 h-5" />
        </button>

        <button className="text-neutral-400 hover:text-neutral-600 transition-colors p-3">
          <EllipsisHorizontalCircleIcon className="w-5 h-5" />
        </button>
      </div>
    </ChatHeader>
  );
};

export default PrivateChatHeader;
