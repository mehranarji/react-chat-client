import {
  EllipsisHorizontalCircleIcon,
  PhoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
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
        <p className="font-medium text-lg">{name}</p>
        <p className="text-neutral-400">{status.toLowerCase()}</p>
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

export default PrivateChatHeader;
