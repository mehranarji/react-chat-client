import { FC, ReactNode } from "react";

interface ChatHeaderProps {
  children?: ReactNode;
}

const ChatHeader: FC<ChatHeaderProps> = (props) => {
  const { children } = props;

  return (
    <div
      className="
        h-24
        flex items-center
        border-b border-b-neutral-100
        py-4 px-8
      "
    >
      {children}
    </div>
  );
};

export default ChatHeader;
