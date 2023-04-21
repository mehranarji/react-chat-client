import clsx from "clsx";
import { FC, ReactNode } from "react";

interface MediaItemProps {
  className?: string;
  children?: ReactNode;
}

const MediaItem: FC<MediaItemProps> = props => {
  const { className, children } = props;
  return (
    <div className={clsx("aspect-square rounded-lg overflow-hidden", className)}>
      {children}
    </div>
  );
};

export default MediaItem;
