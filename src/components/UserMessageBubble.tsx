import clsx from "clsx";
import { FC, ReactNode } from "react";

interface UserMessageBubbleProps {
  children?: ReactNode;
}

const UserMessageBubble: FC<UserMessageBubbleProps> = (props) => {
  const { children } = props;
  return (
    <div
      className={clsx(
        "max-w-sm",
        "rounded-3xl",
        "overflow-hidden",
        "bg-green-700 text-white",
        "rounded-tr-none"
      )}
    >
      {children}
    </div>
  );
};

export default UserMessageBubble;
