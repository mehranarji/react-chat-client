import {
  ChatBubbleOvalLeftEllipsisIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { FC } from "react";
import User from "../app/models/User";
import { displayName } from "../helpers/user";
import ListItem from "./ListItem";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";

interface GroupContactListProps {
  contacts: User[];
  className?: string;
}

const GroupContactList: FC<GroupContactListProps> = props => {
  const { contacts, className } = props;

  return (
    <ul className={className}>
      {contacts.map(contact => (
        <li className="py-1.5" key={contact.id}>
          <ListItem
            avatar={
              <UserAvatar
                src={contact.picture?.thumbnail}
                alt={displayName(contact)}
              />
            }
          >
            <div className="flex items-center">
              <p className="font-semibold truncate">{displayName(contact)}</p>

              <div className="ml-auto">
                {/* <button className="rounded-full hover:bg-neutral-50 p-2">
                  <VideoCameraIcon className="text-neutral-400 w-6" />
                </button> */}

                <Link to={`/${contact.id}`} className="inline-block rounded-full hover:bg-neutral-50 p-2">
                    <ChatBubbleOvalLeftEllipsisIcon className="text-neutral-400 w-6" />
                </Link>
              </div>
            </div>
          </ListItem>
        </li>
      ))}
    </ul>
  );
};

export default GroupContactList;
