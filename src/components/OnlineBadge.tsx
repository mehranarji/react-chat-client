import clsx from "clsx";
import { FC } from "react";

interface OnlineBadgeProps {
  className?: string;
}

const OnlineBadge: FC<OnlineBadgeProps> = props => {
  const { className } = props;
  return <div className={clsx("w-3 h-3 bg-green-500 border-2 border-white rounded-full", className)} />;
};

export default OnlineBadge;
