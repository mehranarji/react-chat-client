import clsx from "clsx";
import dayjs from "dayjs";
import { groupBy } from "lodash";
import { FC, useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import Chat from "../app/models/Chat";
import { selectUser } from "../features/users/userSlice";
import { chatTimestamp } from "../helpers/date";
import ContactMessage from "./ContactMessage";
import EmptyChatMessages from "./EmptyChatMessages";
import { MessageIndicator } from "./MessageIndicator";
import UserMessage from "./UserMessage";

interface MessagesListProps {
  chat: Chat;
}

const MessagesList: FC<MessagesListProps> = props => {
  const { chat } = props;

  const user = useAppSelector(selectUser);

  const groupedMessages = useMemo(
    () =>
      groupBy(chat.messages, message =>
        dayjs(message.send_at).startOf("d").valueOf()
      ),
    [chat.messages]
  );

  return (
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
      {Object.keys(groupedMessages)
        .sort((a, b) => Number(b) - Number(a))
        .map(date => (
          <div key={date}>
            <MessageIndicator>{chatTimestamp(Number(date))}</MessageIndicator>

            {groupedMessages[date]
              .sort((a, b) => a.send_at - b.send_at)
              .map(message =>
                message.contact_id === user.id ? (
                  <UserMessage message={message} key={message.id} />
                ) : (
                  <ContactMessage message={message} key={message.id} />
                )
              )}
          </div>
        ))}

      {Object.keys(groupedMessages).length === 0 && <EmptyChatMessages />}
    </div>
  );
};

export default MessagesList;
