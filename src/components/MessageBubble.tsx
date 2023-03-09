import clsx from "clsx";
import { FC, ReactNode } from "react";

interface MessageBubbleProps {
  children?: ReactNode;
  isLeft?: Boolean;
}

const MessageBubble: FC<MessageBubbleProps> = (props) => {
  const { children, isLeft: left } = props;

  return (
    <div
      className={clsx("flex items-start gap-4", {
        "flex-row-reverse": !left,
        "flex-row": left,
      })}
    >
      <img
        src="https://source.unsplash.com/random/200x200?portrait"
        alt=""
        className="w-11 aspect-square rounded-full"
      />
      <div
        className={clsx("flex flex-col flex-1", {
          "items-start": left,
          "items-end": !left,
        })}
      >
        <p
          className={clsx("flex items-baseline gap-2 mb-2", {
            "flex-row-reverse": !left,
          })}
        >
          <span className="font-bold">You</span>
          <span className="font-light text-neutral-400 text-sm">9:30 AM</span>
        </p>
        <div
          className={clsx(
            "max-w-sm",
            // "px-4 py-4",
            "rounded-3xl",
            "overflow-hidden",
            {
              "bg-green-700 text-white": !left,
              "bg-neutral-300 text-black": left,
            },
            {
              "rounded-tr-none": !left,
              "rounded-tl-none": left,
            }
          )}
        >
          {children}
        </div>
      </div>
      <div className="w-14"></div>
    </div>
  );
};

export default MessageBubble;
