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
        "overflow-hidden",
        "bg-neutral-200 text-black",
        "rounded-r-3xl last-of-type:rounded-bl-3xl",
      )}
    >
      {children}
    </div>
  );
};

export default ContactMessageBubble;
