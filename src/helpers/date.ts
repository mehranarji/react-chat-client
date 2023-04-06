import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "today",
    dd: "yesterday",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

export const humanReadableDate = (date: Date | string) => {
  return dayjs().to(date, false);
};

export const chatTimestamp = (date: number) => {
  const difference_in_day = dayjs().diff(date, "d");

  if (difference_in_day === 0) {
    return "Today";
  }

  if (difference_in_day === 1) {
    return "Yesterday";
  }

  return dayjs(date).format("MMMM D");
};
