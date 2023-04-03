import clsx from "clsx";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectChat, sendMessage } from "../features/chats/chatsSlice";
import { selectContact } from "../features/contacts/contactsSlice";
import { selectUser } from "../features/users/userSlice";
import { displayName } from "../helpers/user";
import ChatFooter from "./ChatFooter";
import ChatInput from "./ChatInput";
import MessageSelector from "./MessageSelector";
import EmptyChatMessages from "./EmptyChatMessages";
import PrivateChatHeader from "./PrivateChatHeader";
import PrivateChatView from "./PrivateChatView";
import GroupChatView from "./GroupChatView";

interface ChatMainProps {
  className?: String;
}

const ChatMain: FC<ChatMainProps> = (props) => {
  const { className } = props;
  const { id: chat_id } = useParams<"id">();
  const chat = useAppSelector(selectChat(Number(chat_id)));

  return (
    <div className={clsx("overflow-hidden flex flex-col", className)}>
      {chat.type === "private" && <PrivateChatView chat={chat} />}
      {chat.type === "group" && <GroupChatView chat={chat} />}
    </div>
  );
};

export default ChatMain;
