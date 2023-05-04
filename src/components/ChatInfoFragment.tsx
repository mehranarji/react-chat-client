import clsx from "clsx";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectChat } from "../features/chats/chatsSlice";
import ChatTitle from "./ChatTitle";
import PrivateChatInfo from "./PrivateChatInfo";
import GroupChatInfo from "./GroupChatInfo";

interface ChatInfoFragmentProps {
  className?: string;
}

const ChatInfoFragment: FC<ChatInfoFragmentProps> = props => {
  const { className } = props;

  const { id: chat_id } = useParams<"id">();
  const chat = useAppSelector(selectChat(Number(chat_id)));

  if (!chat) return <></>;

  return (
    <aside className={clsx("flex flex-col overflow-auto h-full", className)}>
      <div className="p-8 flex items-start">
        <h2 className="font-bold text-3xl">
          <ChatTitle chat={chat} />
        </h2>
      </div>

      <div className="px-8">
        {chat.type === "private" && <PrivateChatInfo chat={chat} />}
        {chat.type === "group" && <GroupChatInfo chat={chat} />}
      </div>
    </aside>
  );
};

export default ChatInfoFragment;
