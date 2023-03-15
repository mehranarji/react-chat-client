import { FC } from "react";
import User from "../data/User";
import Badge from "./Badge";
import ContactAvatar from "./ContactAvatar";
import ListItem from "./ListItem";

interface ContactListItemProps {
  className?: string;
  user: User;
}

const ContactListItem: FC<ContactListItemProps> = (props) => {
  const { className, user } = props;

  return (
    <ListItem avatar={<ContactAvatar src={user.picture.thumbnail} className="w-14" />} className={className}>
      <div className="flex items-baseline gap-1">
        <p className="truncate">{`${user.name.first} ${user.name.last}`}</p>
        <p className="text-xs text-neutral-400 whitespace-nowrap ml-auto">
          12:45 PM
        </p>
      </div>
      {/* <div className="flex items-baseline gap-1">
        <p className="truncate">
          Lorem ipsum dolor 🔥 sit amet consectetur adipisicing elit. Non,
          ratione!
        </p>
        <p className="ml-auto">
          <Badge className="bg-red-600 text-white text-xs">1</Badge>
        </p>
      </div> */}
    </ListItem>
  );
};

export default ContactListItem;
