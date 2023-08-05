import clsx from "clsx";
import dayjs from "dayjs";
import { chain, groupBy, reduce } from "lodash";
import { FC, useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import Chat from "../app/models/Chat";
import { selectUser } from "../features/users/userSlice";
import { chatTimestamp } from "../helpers/date";
import ContactMessage from "./ContactMessage";
import EmptyChatMessages from "./EmptyChatMessages";
import { MessageIndicator } from "./MessageIndicator";
import UserMessage from "./UserMessage";
import Message from "src/app/models/Message";

interface MessagesListProps {
  chat: Chat;
}

const MessagesList: FC<MessagesListProps> = props => {
  const { chat } = props;

  const user = useAppSelector(selectUser);

  const groupedMessages = useMemo(
    () =>
      chain(chat.messages)
        .sortBy((message) => message.send_at)
        .groupBy(message =>
          dayjs(message.send_at).startOf("d").valueOf()
        )
        .mapValues((messageGroup) =>
          reduce<Message, Message[][]>(messageGroup, (result, message, index, messageGroup) => {
            if (index === 0) {
              return [[message]];
            }

            if (message.contact_id === messageGroup[index - 1].contact_id && dayjs(message.send_at).diff(messageGroup[index - 1].send_at, 'm') <= 1) {
              result[result.length - 1].push(message);
              return result;
            }

            return [...result, [message]];
          }
          , [[]])
        )
        .value()
        ,
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
      {/* <pre>{JSON.stringify(groupedMessages)}</pre> */}
      {Object.keys(groupedMessages)
        .sort((a, b) => Number(b) - Number(a))
        .map(date => (
          <div key={date} className="flex flex-col gap-y-4">
            <MessageIndicator>{chatTimestamp(Number(date))}</MessageIndicator>

            {groupedMessages[date]
              .map(messages =>
                messages[0].contact_id === user.id ? (
                  <UserMessage messages={messages} key={messages[0].id} />
                ) : (
                  <ContactMessage messages={messages} key={messages[0].id} />
                )
              )}
          </div>
        ))}

      {Object.keys(groupedMessages).length === 0 && <EmptyChatMessages />}
    </div>
  );
};

export default MessagesList;
