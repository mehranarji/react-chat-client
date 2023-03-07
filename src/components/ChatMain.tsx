import clsx from "clsx";
import { FC } from "react";
import { Status } from "../data/Status";
import ChatFooter from "./ChatFooter";
import ChatInput from "./ChatInput";
import PrivateChatHeader from "./PrivateChatHeader";

interface ChatMainProps {
  className?: string;
}

const ChatMain: FC<ChatMainProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={clsx(
        "overflow-hidden",
        "border-x border-x-neutral-100",
        className
      )}
    >
      <PrivateChatHeader name="Peter Parker" status={Status.Online} />

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
        {Array(2)
          .fill(null)
          .map((_, i) => (
            <p className="bg-blue-500 p-5">{i + 1}</p>
          ))}
      </div>

      <ChatFooter>
        <ChatInput />
      </ChatFooter>
    </div>
  );
};

export default ChatMain;
