import clsx from "clsx";
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { PrivateChat } from "../app/models/Chat";
import { sendMessage } from "../features/chats/chatsSlice";
import { selectContact } from "../features/contacts/contactsSlice";
import { selectUser } from "../features/users/userSlice";
import { displayName } from "../helpers/user";
import ChatFooter from "./ChatFooter";
import ChatInput from "./ChatInput";
import EmptyChatMessages from "./EmptyChatMessages";
import MessageSelector from "./MessageSelector";
import PrivateChatHeader from "./PrivateChatHeader";

interface PrivateChatViewProps {
  chat: PrivateChat;
}

const PrivateChatView: FC<PrivateChatViewProps> = (props) => {
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
          id: Math.floor(Math.random() * 10000),
          type: "text",
          contact_id: user.id,
          send_at: new Date(),
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
    </>
  );
};

export default PrivateChatView;
