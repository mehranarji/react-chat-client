import { MoreVertical } from "lucide-react";
import { FC } from "react";
import User from "../data/User";
import ChatHeader from "./ChatHeader";

interface PrivateChatHeaderProps {
  name: String;
  status: User["Status"];
}

const PrivateChatHeader: FC<PrivateChatHeaderProps> = (props) => {
  const { name, status } = props;

  return (
    <ChatHeader>
      <img
        src="https://source.unsplash.com/random/200x200?portrait"
        alt=""
        className="h-full aspect-square rounded-full mr-4"
      />
      <div>
        <p className="font-black text-lg">{name}</p>
        <p className="text-neutral-400">{status}</p>
      </div>
      <button className="ml-auto">
        <MoreVertical />
      </button>
    </ChatHeader>
  );
};

export default PrivateChatHeader;
