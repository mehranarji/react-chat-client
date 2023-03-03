import { MoreVertical } from "lucide-react";
import { FC } from "react";
import { Status } from "../data/Status";
import PrivateMessageHeader from "./PrivateMessageHeader";

interface ChatHeaderProps {}

const ChatHeader: FC<ChatHeaderProps> = (props) => {
  return (
    <div
      className="
        h-24
        flex items-center
        border-b border-b-neutral-100
        py-4 px-8
      "
    >
      <PrivateMessageHeader Name="Peter Parker" Status={Status.Online} />
    </div>
  );
};

export default ChatHeader;
