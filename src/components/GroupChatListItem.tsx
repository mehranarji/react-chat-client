import { FC } from "react";
import { GroupChat } from "../app/models/Chat";
import ChatListItem from "./ChatListItem";

interface GroupChatListItemProps {
  chat: GroupChat;
  className?: string;
}

const GroupChatListItem: FC<GroupChatListItemProps> = (props) => {
  const { className, chat } = props;

  return (
    <ChatListItem 
      name={chat.name}
      className={className}
      avatar={chat.image}
      message={chat.messages?.[0]}
    />
  );
};

export default GroupChatListItem;
