import dayjs from "dayjs";
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { GroupChat } from "../app/models/Chat";
import { sendMessage } from "../features/chats/chatsSlice";
import { selectContact } from "../features/contacts/contactsSlice";
import { selectUser } from "../features/users/userSlice";
import { generateMessageId } from "../helpers/chat";
import ChatFooter from "./ChatFooter";
import ChatInput from "./ChatInput";
import GroupChatHeader from "./GroupChatHeader";
import MessagesList from "./MessagesList";

interface GroupChatViewProps {
  chat: GroupChat;
}

const GroupChatView: FC<GroupChatViewProps> = props => {
  const { chat } = props;
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const members = useAppSelector(selectContact(Number(chat.id)));

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

  return (
    <>
      <GroupChatHeader chat={chat} />

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

export default GroupChatView;
