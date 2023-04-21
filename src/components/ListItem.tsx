import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";

interface ListItemProps extends ComponentPropsWithoutRef<"div"> {
  avatar?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const ListItem = forwardRef<HTMLDivElement, ListItemProps>((props, ref) => {
  const { className, children, avatar, ...rest } = props;

  return (
    <div
      className={clsx("flex items-center gap-4 overflow-hidden", className)}
      ref={ref}
      {...rest}
    >
      {avatar && <div className="w-12">{avatar}</div>}
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
});

ListItem.displayName = "ListItem";

export default ListItem;
