import clsx from "clsx";
import { FC, ReactNode } from "react";

interface ContactMessageBubbleProps {
  children?: ReactNode;
}

const ContactMessageBubble: FC<ContactMessageBubbleProps> = (props) => {
  const { children } = props;
  return (
    <div
      className={clsx(
        "max-w-sm",
        "rounded-3xl",
        "overflow-hidden",
        "bg-neutral-200 text-black",
        "rounded-tl-none"
      )}
    >
      {children}
    </div>
  );
};

export default ContactMessageBubble;
