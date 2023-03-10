import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  className?: string;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <span className={clsx("leading-normal rounded-full min-w-[1.5em] px-1 inline-block", className)} ref={ref} {...rest}>
      {children}
    </span>
  );
});

Badge.displayName = "Badge";

export default Badge;
