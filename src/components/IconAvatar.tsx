import clsx from "clsx";
import { FC, ReactNode } from "react";

interface IconAvatarProps {
  className?: string;
  children?: ReactNode;
}

const IconAvatar: FC<IconAvatarProps> = props => {
  const { children, className } = props;

  return (
    <div
      className={clsx(
        "aspect-square rounded-lg w-full bg-neutral-100 flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default IconAvatar;
