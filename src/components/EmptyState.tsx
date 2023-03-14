import { FaceFrownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { FC, ReactNode } from "react";

interface EmptyStateProps {
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const EmptyState: FC<EmptyStateProps> = (props) => {
  const { children, className, icon } = props;
  return (
    <div className={clsx("flex items-center gap-4 text-neutral-400", className)}>
      <p>
        <FaceFrownIcon className="w-10 h-10" />
      </p>
      {children}
    </div>
  );
};

export default EmptyState;
