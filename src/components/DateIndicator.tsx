import clsx from "clsx";
import { FC } from "react";
import { humanReadableDate } from "../helpers/date";

interface DateIndicatorProps {
  date: Date;
}

const DateIndicator: FC<DateIndicatorProps> = (props) => {
  const { date } = props;
  return (
    <div
      className={clsx(
        "text-sm font-normal text-center uppercase",
        "flex items-center gap-6",
        "before:h-px before:bg-neutral-200 before:flex-1",
        "after:h-px after:bg-neutral-200 after:flex-1",
      )}
    >
      {humanReadableDate(date)}
    </div>
  );
};

export default DateIndicator;
