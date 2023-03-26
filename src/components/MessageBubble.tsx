import clsx from "clsx";
import dayjs from "dayjs";
import { FC, ReactNode } from "react";
import ContactAvatar from "./ContactAvatar";

export interface MessageBubbleProps {
  children?: ReactNode;
  isLeft?: Boolean;
  avatar?: string;
  name: string;
  date: Date;
}

const MessageBubble: FC<MessageBubbleProps> = (props) => {
  const { date, name, children, isLeft, avatar } = props;

  return (
    <div
      className={clsx("flex items-start gap-4", {
        "flex-row-reverse": !isLeft,
        "flex-row": isLeft,
      })}
    >
      {!!avatar && <ContactAvatar src={avatar} className="w-14" />}
      <div
        className={clsx("flex flex-col flex-1", {
          "items-start": isLeft,
          "items-end": !isLeft,
        })}
      >
        <p
          className={clsx("flex items-baseline gap-2 mb-2", {
            "flex-row-reverse": !isLeft,
          })}
        >
          <span className="font-bold">{name}</span>
          <span className="font-light text-neutral-400 text-sm">
            {dayjs(date).format("HH:mm")}
          </span>
        </p>

        <div
          className={clsx(
            "max-w-sm",
            // "px-4 py-4",
            "rounded-3xl",
            "overflow-hidden",
            {
              "bg-green-700 text-white": !isLeft,
              "bg-neutral-200 text-black": isLeft,
            },
            {
              "rounded-tr-none": !isLeft,
              "rounded-tl-none": isLeft,
            }
          )}
        >
          {children}
        </div>
      </div>
      <div className="w-11"></div>
    </div>
  );
};

export default MessageBubble;
