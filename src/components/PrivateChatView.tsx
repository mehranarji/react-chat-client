import clsx from "clsx";
import dayjs from "dayjs";
import { groupBy, map } from "lodash";
import { FC, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { PrivateChat } from "../app/models/Chat";
import { sendMessage } from "../features/chats/chatsSlice";
import { selectContact } from "../features/contacts/contactsSlice";
import { selectUser } from "../features/users/userSlice";
import { generateMessageId } from "../helpers/chat";
import ChatFooter from "./ChatFooter";
import ChatInput from "./ChatInput";
import ContactMessage from "./ContactMessage";
import EmptyChatMessages from "./EmptyChatMessages";
import { MessageIndicator } from "./MessageIndicator";
import PrivateChatHeader from "./PrivateChatHeader";
import UserMessage from "./UserMessage";
import { chatTimestamp } from "../helpers/date";
import MessagesList from "./MessagesList";

interface PrivateChatViewProps {
  chat: PrivateChat;
}

const PrivateChatView: FC<PrivateChatViewProps> = props => {
  const { chat } = props;
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const contact = useAppSelector(selectContact(Number(chat.id)));

  const onTextMessage = () => {
    const content = text.trim();
    setText("");

    if (content === "") return;

    const chat_id = chat.id;
    dispatch(
      sendMessage({
        chat_id: Number(chat_id),
        message: {
          id: generateMessageId(chat),
          type: "text",
          contact_id: user.id,
          send_at: dayjs().valueOf(),
          content,
        },
      })
    );
  };

  if (!contact) {
    return <></>;
  }

  return (
    <>
      <PrivateChatHeader chat={chat} />

      <MessagesList chat={chat} />

      <ChatFooter>
        <ChatInput
          text={text}
          onTextChange={setText}
          onTextMessage={onTextMessage}
        />
      </ChatFooter>
    </>
  );
};

export default PrivateChatView;
