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
import ContactMessage from "./ContactMessage";
import EmptyChatMessages from "./EmptyChatMessages";
import PrivateChatHeader from "./PrivateChatHeader";

interface ChatMainProps {
  className?: String;
}

const ChatMain: FC<ChatMainProps> = (props) => {
  const { className } = props;

  const [text, setText] = useState("");
  const { id: chat_id } = useParams<"id">();

  const contact = useAppSelector(selectContact(Number(chat_id)));
  const chats = useAppSelector(selectChat(Number(chat_id)));
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  if (!contact) {
    return <></>;
  }

  const onTextMessage = () => {
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
  };

  return (
    <div className={clsx("overflow-hidden flex flex-col", className)}>
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
        {!!chats &&
          chats.messages?.map((message) => (
            <ContactMessage message={message} key={message.id} />
          ))}

        {!chats && <EmptyChatMessages />}
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

export default ChatMain;
