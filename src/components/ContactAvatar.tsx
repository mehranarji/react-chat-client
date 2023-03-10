import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

interface ContactAvatarProps extends ComponentPropsWithoutRef<"img"> {}

const ContactAvatar = forwardRef<HTMLImageElement, ContactAvatarProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    return (
      <img
        src={`https://source.unsplash.com/random/200x200?person`}
        alt=""
        className={clsx("aspect-square rounded-full", className)}
        ref={ref}
        {...rest}
      />
    );
  }
);

ContactAvatar.displayName = "ContactAvatar";

export default ContactAvatar;
