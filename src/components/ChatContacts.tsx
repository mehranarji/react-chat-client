import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import { fetchAll } from "../features/contacts/contactsSlice";
import useFilterContacts from "../hooks/useFilterContacts";
import ContactListItem from "./ContactListItem";
import ContactsSubheader from "./ContactsSubheader";
import TextInputFilled from "./TextInputFilled";

interface ChatContactsProps {
  className?: string;
}

const ChatContacts: FC<ChatContactsProps> = (props) => {
  const { className } = props;
  
  const dispatch = useDispatch<AppDispatch>();
  const contacts = useSelector((s: RootState) => s.contacts.contacts);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  const filteredContacts = useFilterContacts(contacts || [], query);

  return (
    <div className={clsx("flex flex-col overflow-hidden h-full", className)}>
      <div className="p-8 space-y-8">
        <div className="flex items-center">
          <h2 className="font-bold text-3xl">Messages</h2>
          <button className="ml-auto text-green-700">
            <PencilSquareIcon className="w-6 h-6" />
          </button>
        </div>
        <TextInputFilled
          placeholder="Search..."
          prependIcon={<MagnifyingGlassIcon className="w-5 h-5" />}
          value={query}
          onChange={(ev) => setQuery(ev.target.value)}
        />
      </div>

      <div className="overflow-auto space-y-6">
        <div>
          <ContactsSubheader
            contacts={filteredContacts}
            isSearch={query.trim() !== ""}
            className="bg-white py-2 px-8"
          />

          {filteredContacts?.map((contact, i) => (
            <NavLink
              to={`/${i}`}
              key={i}
              className={({ isActive }) =>
                clsx("block px-8", "hover:bg-neutral-50", "transition-colors duration-300", {
                  "bg-neutral-50": isActive,
                })
              }
            >
              <ContactListItem
                user={contact}
                className={clsx("py-4", {
                  "border-t border-t-neutral-100": i !== 0,
                })}
              />
            </NavLink>
          ))}

          {contacts && contacts.length !== 0 && (
            <p className="text-center text-xs text-neutral-400 py-3 bg-neutral-100 uppercase">
              {contacts.length} Contacts
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatContacts;
