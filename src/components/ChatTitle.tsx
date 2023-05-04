import { FC } from "react";
import Chat from "../app/models/Chat";
import GroupChatTitle from "./GroupChatTitle";
import PrivateChatTitle from "./PrivateChatTitle";

interface ChatTitleProps {
  chat: Chat;
}

const ChatTitle: FC<ChatTitleProps> = props => {
  const { chat } = props;

  if (chat.type === "group") {
    return <GroupChatTitle chat={chat} />;
  }

  return <PrivateChatTitle chat={chat} />;
};

export default ChatTitle;
