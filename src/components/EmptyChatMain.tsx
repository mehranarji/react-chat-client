import clsx from "clsx";
import { FC } from "react";

interface EmptyChatMainProps {
  className?: string;
}

const EmptyChatMain: FC<EmptyChatMainProps> = (props) => {
  const { className } = props;

  return (
    <div className={clsx("bg-neutral-50", className)}>
      <div className="flex flex-col h-full justify-center items-center">
        <p className="bg-white px-6 py-2 rounded-full text-neutral-400 text-sm">Select a chat to start</p>
      </div>
    </div>
  );
};

export default EmptyChatMain;
