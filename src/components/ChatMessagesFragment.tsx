import clsx from "clsx";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectChat } from "../features/chats/chatsSlice";
import GroupChatView from "./GroupChatView";
import PrivateChatView from "./PrivateChatView";
import { Navigate } from "react-router-dom";

interface ChatMessagesFragmentProps {
  className?: String;
}

const ChatMessagesFragment: FC<ChatMessagesFragmentProps> = props => {
  const { className } = props;
  const { id: chat_id } = useParams<"id">();
  const chat = useAppSelector(selectChat(Number(chat_id)));

  if (!chat) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className={clsx("overflow-hidden flex flex-col", className)}>
      {chat.type === "private" && <PrivateChatView chat={chat} />}
      {chat.type === "group" && <GroupChatView chat={chat} />}
    </div>
  );
};

export default ChatMessagesFragment;
