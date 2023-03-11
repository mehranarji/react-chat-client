import clsx from "clsx";
import { FC } from "react";
import Badge from "./Badge";
import ContactAvatar from "./ContactAvatar";
import ListItem from "./ListItem";

interface ContactListItemProps {
  className?: string;
}

const ContactListItem: FC<ContactListItemProps> = (props) => {
  const { className } = props;

  return (
    <ListItem avatar={<ContactAvatar className="w-14" />} className={className}>
      <div className="flex items-baseline gap-1">
        <p className="truncate">Eric Geminis</p>
        <p className="text-xs text-neutral-400 whitespace-nowrap ml-auto">
          12:45 PM
        </p>
      </div>
      <div className="flex items-baseline gap-1">
        <p className="truncate">
          Lorem ipsum dolor 🔥 sit amet consectetur adipisicing elit. Non,
          ratione!
        </p>
        <p className="ml-auto">
          <Badge className="bg-red-600 text-white text-xs">2</Badge>
        </p>
      </div>
    </ListItem>
  );
};

export default ContactListItem;
