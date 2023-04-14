import clsx from "clsx";
import { FC } from "react";
import User from "../app/models/User";
import ContactListItem from "./ContactListItem";

interface ContactListProps {
  contacts: User[];
  onSelect?: (contact: User) => void;
}

const ContactList: FC<ContactListProps> = props => {
  const { onSelect, contacts } = props;

  return (
    <ul>
      {contacts.map((contact, index) => (
        <li
          className={clsx("px-8", {
            "hover:bg-neutral-50 cursor-pointer": onSelect !== undefined,
          })}
          onClick={() => onSelect?.(contact)}
          key={contact.id}
        >
          <ContactListItem
            user={contact}
            className={clsx("py-2", {
              "border-t border-t-neutral-100": index !== 0,
            })}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
