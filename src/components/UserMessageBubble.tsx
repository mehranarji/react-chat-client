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
        "overflow-hidden",
        "bg-green-700 text-white",
        "rounded-l-3xl last-of-type:rounded-br-3xl",
      )}
    >
      {children}
    </div>
  );
};

export default UserMessageBubble;
