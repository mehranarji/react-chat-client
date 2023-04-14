import { FC } from "react";
import User from "../app/models/User";
import ListItem from "./ListItem";
import UserAvatar from "./UserAvatar";
import { displayName } from "../helpers/user";

interface ContactListItemProps {
  user: User;
  className?: string;
}

const ContactListItem: FC<ContactListItemProps> = props => {
  const { user, className } = props;

  return (
    <ListItem
      className={className}
      avatar={
        <UserAvatar src={user.picture?.thumbnail} alt={displayName(user)} />
      }
    >
      <div className="flex items-baseline gap-1">
        <p className="truncate font-semibold">{displayName(user)}</p>
      </div>
    </ListItem>
  );
};

export default ContactListItem;
