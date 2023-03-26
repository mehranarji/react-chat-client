import clsx from "clsx";
import { FC } from "react";

interface EmptyChatMessagesProps {
  className?: string;
}

const EmptyChatMessages: FC<EmptyChatMessagesProps> = (props) => {
  const { className } = props;
  return (
    <div className={clsx("flex flex-col h-full justify-center items-center", className)}>
      <p className="bg-white px-6 py-2 rounded-full text-neutral-400 text-sm">
        Send your first message
      </p>
    </div>
  );
};

export default EmptyChatMessages;
