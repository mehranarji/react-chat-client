import { FC } from "react";
import { humanReadableDate } from "../helpers/date";
import { MessageIndicator } from "./MessageIndicator";

interface DateIndicatorProps {
  date: Date;
}

const DateIndicator: FC<DateIndicatorProps> = (props) => {
  const { date } = props;

  return <MessageIndicator>{humanReadableDate(date)}</MessageIndicator>;
};

export default DateIndicator;
