import clsx from "clsx";
import dayjs from "dayjs";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectChat, sendMessage } from "../features/chats/chatsSlice";
import { selectContact } from "../features/contacts/contactsSlice";
import ChatFooter from "./ChatFooter";
import ChatInput from "./ChatInput";
import EmptyChatMessages from "./EmptyChatMessages";
import ImageMessageBubble from "./ImageMessageBubble";
import PrivateChatHeader from "./PrivateChatHeader";
import TextMessageBubble from "./TextMessageBubble";

interface ChatMainProps {
  className?: String;
}

const ChatMain: FC<ChatMainProps> = (props) => {
  const { className } = props;

  const [text, setText] = useState("");
  const { id: chat_id } = useParams<"id">();

  const contact = useAppSelector(selectContact(Number(chat_id)));
  const chats = useAppSelector(selectChat(Number(chat_id)));
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
          contact_id: 0,
          send_at: new Date(),
          content,
        },
      })
    );
  };

  // Dummy
  const yesterday = dayjs().subtract(1, "d");

  return (
    <div className={clsx("overflow-hidden flex flex-col", className)}>
      <PrivateChatHeader
        name={`${contact.first_name} ${contact.last_name}`}
        avatar={contact.picture.thumbnail}
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
          chats.messages?.map((message) => {
            // <TextMessageBubble key={i} isLeft={i % 4 === 0} text={`${i + 1}`} />

            if (message.type === "text") {
              return (
                <TextMessageBubble
                  name={contact.first_name}
                  key={message.id}
                  date={message.send_at}
                  text={message.content}
                  isLeft={message.contact_id !== 0}
                />
              );
            }

            if (message.type === "image") {
              return (
                <ImageMessageBubble
                  name="You"
                  key={message.id}
                  date={message.send_at}
                  src={message.address}
                  isLeft={message.contact_id !== 0}
                />
              );
            }

            return <p>unsupported message</p>;
          })}

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
