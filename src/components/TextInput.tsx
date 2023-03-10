import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const TextInput = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input">
>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <input className={clsx("", className)} ref={ref} {...rest}>
      {children}
    </input>
  );
});

export default TextInput;
