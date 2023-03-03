import { FC, ReactNode } from "react";

interface ChatFooterProps {
  children?: ReactNode;
}

const ChatFooter: FC<ChatFooterProps> = (props) => {
  const { children } = props;
  return (
    <div
      className="
        h-24
        border-t border-t-neutral-100
        py-4 px-8
      "
    >
      {children}
    </div>
  );
};

export default ChatFooter;
