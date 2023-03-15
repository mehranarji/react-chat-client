import clsx from "clsx";
import dayjs from "dayjs";
import { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../app/store";
import { Status } from "../data/Status";
import ChatFooter from "./ChatFooter";
import ChatInput from "./ChatInput";
import DateIndicator from "./DateIndicator";
import ImageMessageBubble from "./ImageMessageBubble";
import PrivateChatHeader from "./PrivateChatHeader";
import TextMessageBubble from "./TextMessageBubble";

interface ChatMainProps {
  className?: String;
}

const ChatMain: FC<ChatMainProps> = (props) => {
  const { className } = props;
  const { id } = useParams<"id">();
  const user = useSelector((s: RootState) =>
    s.contacts.contacts?.find((_, index) => index === Number(id))
  );

  if (!user) {
    return <></>;
  }

  // Dummy
  const yesterday = dayjs().subtract(1, "d");

  return (
    <div className={clsx("overflow-hidden", className)}>
      <PrivateChatHeader
        name={`${user.name.first} ${user.name.last}`}
        avatar={user.picture.medium}
      />

      <div
        className={clsx(
          "flex-1",
          "overflow-auto",
          "flex flex-col-reverse flex-nowrap",
          "bg-neutral-50",
          "gap-4",
          "p-8"
        )}
      >
        <TextMessageBubble
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsa."
          }
        />

        <ImageMessageBubble
          src="https://source.unsplash.com/random/200x200?nature"
          width={200}
          height={200}
          isLeft
        />

        <TextMessageBubble
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsa."
          }
          isLeft
        />

        <DateIndicator date={yesterday.toDate()} />

        {Array(15)
          .fill(null)
          .map((_, i) => (
            <TextMessageBubble key={i} isLeft={i % 4 === 0} text={`${i + 1}`} />
          ))}
      </div>

      <ChatFooter>
        <ChatInput />
      </ChatFooter>
    </div>
  );
};

export default ChatMain;
