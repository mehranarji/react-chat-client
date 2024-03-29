import clsx from "clsx";
import { FC } from "react";
import { useAppSelector } from "../app/hooks";
import Message from "../app/models/Message";
import { selectUser } from "../features/users/userSlice";
import { displayName } from "../helpers/user";
import MessageDate from "./MessageDate";
import MessageName from "./MessageName";
import MessageSelector from "./MessageSelector";
import UserAvatar from "./UserAvatar";
import UserMessageBubble from "./UserMessageBubble";

interface UserMessageProps {
  messages: Message[];
}

const UserMessage: FC<UserMessageProps> = props => {
  const { messages } = props;
  const user = useAppSelector(selectUser);

  return (
    <div className={clsx("flex items-start gap-4", "flex-row-reverse")}>
      <UserAvatar
        src={user.picture?.thumbnail}
        className="w-12"
        alt={displayName(user)}
      />

      <div className={clsx("flex flex-col flex-1", "items-end")}>
        <p className={clsx("flex flex-row-reverse items-baseline gap-2 mb-2")}>
          <MessageName name="you" />
          <MessageDate date={new Date(messages[0].send_at)} />
        </p>

        <div className="flex flex-col gap-1 items-end">
          {messages.map(message => (
            <UserMessageBubble key={message.id}>
              <MessageSelector message={message} />
            </UserMessageBubble>
          ))}
        </div>
      </div>
      <div className="w-14"></div>
    </div>
  );
};

export default UserMessage;
