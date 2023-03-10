import clsx from "clsx";
import { FC } from "react";
import Badge from "./Badge";
import ContactAvatar from "./ContactAvatar";

interface ContactListItemProps {
  className?: string;
}

const ContactListItem: FC<ContactListItemProps> = (props) => {
  const {className} = props;

  return (
    <div className={clsx("flex items-start gap-2 overflow-hidden", className)}>
      <ContactAvatar
        className="w-14"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-1">
          <p className="truncate">Eric Geminis</p>
          <p className="text-xs text-neutral-400 whitespace-nowrap ml-auto">12:45 PM</p>
        </div>
        <div className="flex items-baseline gap-1">
          <p className="truncate">Lorem ipsum dolor 🔥 sit amet consectetur adipisicing elit. Non, ratione!</p>
          <p className="ml-auto">
            <Badge className="bg-red-600 text-white text-xs">2</Badge>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactListItem;
