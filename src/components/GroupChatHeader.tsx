import { FC } from "react";
import ChatHeader from "./ChatHeader";
import UserAvatar from "./UserAvatar";
import { GroupChat } from "../app/models/Chat";
import { VideoCameraIcon, PhoneIcon, EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import GroupStatus from "./GroupStatus";

interface GroupChatHeaderProps {
  chat: GroupChat
}

const GroupChatHeader: FC<GroupChatHeaderProps> = (props) => {
  const { chat } = props;

  return (
    <ChatHeader>
      <UserAvatar className="h-full mr-4" src={chat.image} alt={chat.name} />

      <div>
        <p className="font-medium text-lg">{chat.name}</p>
        <p><GroupStatus chat={chat} /></p>
      </div>

      <div className="ml-auto flex gap-1">
        <button className="text-neutral-400 hover:text-neutral-600 transition-colors p-3">
          <VideoCameraIcon className="w-5 h-5" />
        </button>

        <button className="text-neutral-400 hover:text-neutral-600 transition-colors p-3">
          <PhoneIcon className="w-5 h-5" />
        </button>

        <button className="text-neutral-400 hover:text-neutral-600 transition-colors p-3">
          <EllipsisHorizontalCircleIcon className="w-5 h-5" />
        </button>
      </div>
    </ChatHeader>
  );
};

export default GroupChatHeader;
