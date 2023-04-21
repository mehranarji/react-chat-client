import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { FC, useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import User from "../app/models/User";
import { selectFilteredChats } from "../features/chats/chatsSlice";
import { fetchAll } from "../features/contacts/contactsSlice";
import ChatListItemSelector from "./ChatListItemSelector";
import ChatListSubheader from "./ChatListSubheader";
import ContactsDialog from "./ContactsDialog";
import TextInputFilled from "./TextInputFilled";

interface ChatsListFragmentProps {
  className?: string;
}

const ChatsListFragment: FC<ChatsListFragmentProps> = props => {
  const { className } = props;
  const [showContactsDialog, setShowContactsDialog] = useState(false);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");
  const filteredChats = useAppSelector(selectFilteredChats({ query }));
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  const isSearching = useMemo(() => query.trim() !== "", [query]);

  const onContactSelect = (contact: User) => {
    setShowContactsDialog(false);
    return navigate(`/${contact.id}`);
  };

  return (
    <nav className={clsx("flex flex-col overflow-hidden h-full", className)}>
      <div className="p-8 space-y-8">
        <div className="flex items-center">
          <h2 className="font-bold text-3xl">Messages</h2>

          <button
            className="ml-auto text-green-700"
            onClick={() => setShowContactsDialog(true)}
          >
            <PencilSquareIcon className="w-6 h-6" />
          </button>
        </div>
        <TextInputFilled
          placeholder="Search..."
          prependIcon={<MagnifyingGlassIcon className="w-5 h-5" />}
          value={query}
          onChange={ev => setQuery(ev.target.value)}
        />
      </div>

      <ContactsDialog
        title="Select a contact"
        isOpen={showContactsDialog}
        onClose={() => setShowContactsDialog(false)}
        onSelect={contact => onContactSelect(contact)}
      />

      <div className="h-full flex flex-col overflow-auto">
        <ChatListSubheader
          chats={Object.entries(filteredChats).map(([id, chat]) => chat) || []}
          isSearch={isSearching}
          className="bg-white py-2 px-8"
        />

        {Object.entries(filteredChats).map(([id, chat], i) => (
          <NavLink
            to={`/${chat.id}`}
            key={chat.id}
            className={({ isActive }) =>
              clsx(
                "block px-8",
                "hover:bg-neutral-50",
                "transition-colors duration-300",
                {
                  "bg-neutral-50": isActive,
                }
              )
            }
          >
            <ChatListItemSelector
              chat={chat}
              className={clsx("py-4", {
                "border-t border-t-neutral-100": i !== 0,
              })}
            />
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default ChatsListFragment;
