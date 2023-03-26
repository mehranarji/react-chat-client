import clsx from "clsx";
import dayjs from "dayjs";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
  const contact = useSelector(selectContact(Number(chat_id)));
  const chats = useSelector(selectChat(Number(chat_id)));
  const dispatch = useDispatch();

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
          id: 158,
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
          chats.map((chat, index) => {
            // <TextMessageBubble key={i} isLeft={i % 4 === 0} text={`${i + 1}`} />

            if (chat.type === "text") {
              return (
                <TextMessageBubble
                  name="fo"
                  date={chat.send_at}
                  text={chat.content}
                  isLeft={chat.contact_id !== 0}
                />
              );
            }

            if (chat.type === "image") {
              return (
                <ImageMessageBubble
                  name="You"
                  date={chat.send_at}
                  src={chat.address}
                  isLeft={chat.contact_id !== 0}
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
