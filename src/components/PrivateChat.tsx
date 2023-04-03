import clsx from "clsx";
import { FC, useCallback, useState } from "react";
import { text } from "stream/consumers";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Chat from "../app/models/Chat";
import { sendMessage } from "../features/chats/chatsSlice";
import { selectContact } from "../features/contacts/contactsSlice";
import { displayName } from "../helpers/user";
import ChatFooter from "./ChatFooter";
import ChatInput from "./ChatInput";
import EmptyChatMessages from "./EmptyChatMessages";
import MessageSelector from "./MessageSelector";
import PrivateChatHeader from "./PrivateChatHeader";

interface PrivateChatProps {
  chat: Chat;
  className?: string;
}

const PrivateChat: FC<PrivateChatProps> = (props) => {
  const { chat, className } = props;
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const contact = useAppSelector(selectContact(Number(chat.id)));

  if (!contact) {
    return <></>;
  }

  const onTextMessage = useCallback(() => {
    const content = text.trim();
    setText("");

    if (content === "") return;

    dispatch(
      sendMessage({
        chat_id: Number(chat_id),
        message: {
          id: Math.floor(Math.random() * 1000),
          type: "text",
          contact_id: user.id,
          send_at: new Date(),
          content,
        },
      })
    );
  }, [text]);

  return (
    <div className={className}>
      <PrivateChatHeader
        name={displayName(contact)}
        avatar={contact.picture?.thumbnail}
      />

      <div
        className={clsx(
          "flex-1",
          "overflow-auto",
          "flex flex-col-reverse flex-nowrap",
          "bg-neutral-50",
          "gap-2",
          "p-8"
        )}
      >
        {chat.messages?.map((message) => (
          <MessageSelector message={message} key={message.id} />
        ))}

        {!chat.messages && <EmptyChatMessages />}
      </div>

      <ChatFooter>
        <ChatInput
          text={text}
          onTextChange={setText}
          onTextMessage={onTextMessage}
        />
      </ChatFooter>
    </div>
  );
};

export default PrivateChat;
