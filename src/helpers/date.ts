import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const humanReadableDate = (date: Date | string) => {
  return dayjs().to(date);
};
