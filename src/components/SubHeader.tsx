import clsx from "clsx";
import { FC, ReactNode } from "react";

interface SubHeaderProps {
  text?: string;
  className?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

const SubHeader: FC<SubHeaderProps> = props => {
  const { icon, text, className, children } = props;
  return (
    <h4
      className={clsx(
        "flex items-center gap-2",
        "text-neutral-400",
        className
      )}
    >
      {icon}
      <span className="uppercase text-sm font-medium">{text}</span>
      {children}
    </h4>
  );
};

export default SubHeader;
