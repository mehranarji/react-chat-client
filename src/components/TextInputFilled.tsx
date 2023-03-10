import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";
import TextInput from "./TextInput";

interface TextInputFilledProps extends ComponentPropsWithoutRef<"input"> {
  prependIcon?: ReactNode;
}

const TextInputFilled = forwardRef<HTMLInputElement, TextInputFilledProps>(
  (props, ref) => {
    const { className, children, prependIcon, ...rest } = props;

    return (
      <label
        className={clsx(
          "px-4",
          "bg-neutral-100",
          "rounded-xl",
          "flex items-center gap-2"
        )}
      >
        <span className="text-neutral-400">
          {prependIcon}
        </span>
        <TextInput
          className="bg-transparent outline-none py-3"
          ref={ref}
          {...rest}
        />
      </label>
    );
  }
);

TextInputFilled.displayName = "TextInputFilled";

export default TextInputFilled;
