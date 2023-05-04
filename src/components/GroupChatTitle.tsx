import { FC } from "react";
import { GroupChat } from "../app/models/Chat";

interface GroupChatTitleProps {
  chat: GroupChat;
}

const GroupChatTitle: FC<GroupChatTitleProps> = props => {
  const { chat } = props;
  return <>{chat.name}</>;
};

export default GroupChatTitle;
