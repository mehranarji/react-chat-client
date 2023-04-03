import { FC } from "react";
import Message from "../app/models/Message";
import ContactAvatar from "./ContactAvatar";
import ListItem from "./ListItem";

interface ChatListItemProps {
  name: string;
  className?: string;
  avatar?: string;
  date?: Date;
  message?: Message;
}

const ChatListItem: FC<ChatListItemProps> = (props) => {
  const { className, avatar, date, message, name } = props;

  return (
    <ListItem
      avatar={<ContactAvatar className="w-14" src={avatar} alt={name} />}
      className={className}
    >
      <div className="flex items-baseline gap-1">
        <p className="truncate">{name}</p>

        {date && (
          <p className="text-xs text-neutral-400 whitespace-nowrap ml-auto">
            {date.toString()}
          </p>
        )}
      </div>
      {/* <div className="flex items-baseline gap-1">
        <p className="truncate">
          Lorem ipsum dolor 🔥 sit amet consectetur adipisicing elit. Non,
          ratione!
        </p>
        <p className="ml-auto">
          <Badge className="bg-red-600 text-white text-xs">1</Badge>
        </p>
      </div> */}
    </ListItem>
  );
};

export default ChatListItem;