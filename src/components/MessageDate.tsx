import dayjs from "dayjs";
import { FC } from "react";

interface MessageDateProps {
  date: Date;
}

const MessageDate: FC<MessageDateProps> = (props) => {
  const { date } = props;
  return (
    <span className="font-light text-neutral-400 text-sm">
      {dayjs(date).format("HH:mm")}
    </span>
  );
};

export default MessageDate;
