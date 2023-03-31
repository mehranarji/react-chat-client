import clsx from "clsx";
import { FC, ReactNode } from "react";

interface MessageIndicatorProps {
  className?: string;
  children?: ReactNode;
}

export const MessageIndicator: FC<MessageIndicatorProps> = (props) => {
  const { className, children } = props;

  return (
    <div
      className={clsx(
        "flex items-center gap-8",
        "text-sm font-normal text-center uppercase",
        "before:h-px before:bg-neutral-200/60 before:flex-1",
        "after:h-px after:bg-neutral-200/60 after:flex-1",
        className,
      )}
    >
      {children}
    </div>
  );
};
