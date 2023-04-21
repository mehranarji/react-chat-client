import {
  ChatBubbleOvalLeftEllipsisIcon,
  FunnelIcon,
  NoSymbolIcon
} from "@heroicons/react/20/solid";
import { FC } from "react";
import Chat from "../app/models/Chat";
import SubHeader from "./SubHeader";
import pluralize from "pluralize";

interface ChatListSubheaderProps {
  isSearch?: boolean;
  chats?: Chat[];
  className?: string;
}

const ChatListSubheader: FC<ChatListSubheaderProps> = (props) => {
  const { chats, isSearch, className } = props;

  if (isSearch && (!chats || chats.length === 0)) {
    return (
      <SubHeader
        text="No chat found"
        className={className}
        icon={<NoSymbolIcon className="w-5" />}
      />
    );
  }

  if (isSearch)
    return (
      <SubHeader
        text={`${pluralize('chats', chats?.length, true)} Found`}
        className={className}
        icon={<FunnelIcon className="w-5" />}
      />
    );

  return (
    <SubHeader
      text="All message"
      className={className}
      icon={<ChatBubbleOvalLeftEllipsisIcon className="w-5" />}
    />
  );
};

export default ChatListSubheader;
