import clsx from "clsx";
import { FC } from "react";
import Chat from "../app/models/Chat";
import GroupChatListItem from "./GroupChatListItem";
import PrivateChatListItem from "./PrivateChatListItem";

interface ChatListItemSelectorProps {
  chat: Chat;
  className?: string;
}

const ChatListItemSelector: FC<ChatListItemSelectorProps> = (props) => {
  const { chat, className } = props;

  if (chat.type === "private") {
    return (
      <PrivateChatListItem chat={chat} className={clsx("py-4", className)} />
    );
  }

  if (chat.type === "group") {
    return (
      <GroupChatListItem chat={chat} className={clsx("py-4", className)} />
    );
  }

  return <></>;
};

export default ChatListItemSelector;
