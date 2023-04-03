import { FC } from "react";
import ChatHeader from "./ChatHeader";
import ContactAvatar from "./ContactAvatar";
import { GroupChat } from "../app/models/Chat";

interface GroupChatHeaderProps {
  chat: GroupChat
}

const GroupChatHeader: FC<GroupChatHeaderProps> = (props) => {
  const { chat } = props;

  const getStatus = () => {
    return `${chat.contact_ids.length} members`;
  }
  
  return (
    <ChatHeader>
      <ContactAvatar className="h-full mr-4" src={chat.image} alt={chat.name} />

      <div>
        <p className="font-medium text-lg">{chat.name}</p>
        <p className="text-neutral-400">{getStatus()}</p>
      </div>
    </ChatHeader>
  );
};

export default GroupChatHeader;
