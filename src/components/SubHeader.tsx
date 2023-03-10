import clsx from "clsx";
import { FC, ReactNode } from "react";

interface SubHeaderProps {
  text?: string;
  className?: string;
  icon?: ReactNode;
}

const SubHeader: FC<SubHeaderProps> = (props) => {
  const { icon, text, className } = props;
  return (
    <h4
      className={clsx(
        "flex items-center gap-2",
        "text-neutral-400 uppercase",
        "text-xs font-medium",
        className
      )}
    >
      {icon}
      {text}
    </h4>
  );
};

export default SubHeader;
