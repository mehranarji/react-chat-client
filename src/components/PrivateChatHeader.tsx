import {
  EllipsisHorizontalCircleIcon,
  PhoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { FC } from "react";
import User from "../app/models/User";
import ChatHeader from "./ChatHeader";
import ContactAvatar from "./ContactAvatar";

interface PrivateChatHeaderProps {
  name: string;
  avatar?: string;
  status?: User["status"];
}

const PrivateChatHeader: FC<PrivateChatHeaderProps> = (props) => {
  const { name, status, avatar } = props;

  return (
    <ChatHeader>
      {!!avatar && <ContactAvatar className="h-full mr-4" src={avatar} />}

      <div>
        <p className="font-medium text-lg">{name}</p>
        {!!status && <p className="text-neutral-400">{status.toLowerCase()}</p>}
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
