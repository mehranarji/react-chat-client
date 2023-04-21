import { FC } from "react";
import Message from "../app/models/Message";
import UserAvatar from "./UserAvatar";
import ListItem from "./ListItem";
import OnlineBadge from "./OnlineBadge";

interface ChatListItemProps {
  name: string;
  className?: string;
  avatar?: string;
  date?: Date;
  message?: Message;
  isOnline?: boolean;
}

const ChatListItem: FC<ChatListItemProps> = (props) => {
  const { className, avatar, date, message, name, isOnline } = props;

  return (
    <ListItem
      avatar={
        <div className="relative">
          <UserAvatar src={avatar} alt={name} />
          {isOnline && <OnlineBadge className="absolute bottom-0 right-0" />}
        </div>
      }
      className={className}
    >
      <div className="flex items-baseline gap-1">
        <p className="truncate font-semibold">{name}</p>

        {date && (
          <p className="text-xs text-neutral-400 whitespace-nowrap ml-auto">
            {date.toString()}
          </p>
        )}
      </div>
      {!!message && <div className="flex items-baseline gap-1">
        <p className="truncate text-neutral-400">{message.type === "text" && message.content}</p>
        {/* <p className="ml-auto">
          <Badge className="bg-red-600 text-white text-xs">1</Badge>
        </p> */}
      </div>}
    </ListItem>
  );
};

export default ChatListItem;
