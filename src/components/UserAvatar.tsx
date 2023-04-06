import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

interface UserAvatarProps extends ComponentPropsWithoutRef<"img"> {}

const UserAvatar = forwardRef<HTMLImageElement, UserAvatarProps>(
  (props, ref) => {
    const { className, alt, ...rest } = props;

    return (
      <img
        ref={ref}
        src={`https://source.unsplash.com/random/200x200?person`}
        className={clsx("aspect-square rounded-full", className)}
        alt={alt}
        {...rest}
      />
    );
  }
);

UserAvatar.displayName = "ContactAvatar";

export default UserAvatar;
