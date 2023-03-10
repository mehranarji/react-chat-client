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
        "flex items-center gap-8",
        "text-sm font-normal text-center uppercase",
        "before:h-px before:bg-neutral-200/60 before:flex-1",
        "after:h-px after:bg-neutral-200/60 after:flex-1",
      )}
    >
      {humanReadableDate(date)}
    </div>
  );
};

export default DateIndicator;
