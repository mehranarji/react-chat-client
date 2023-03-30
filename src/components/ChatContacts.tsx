import {
  MagnifyingGlassIcon,
  PencilSquareIcon
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { FC, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectFilteredChats } from "../features/chats/chatsSlice";
import { fetchAll } from "../features/contacts/contactsSlice";
import ContactsSubheader from "./ContactsSubheader";
import PrivateChatListItem from "./PrivateChatListItem";
import TextInputFilled from "./TextInputFilled";

interface ChatContactsProps {
  className?: string;
}

const ChatContacts: FC<ChatContactsProps> = (props) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");
  const filteredChats = useAppSelector(selectFilteredChats({query}));

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  const isSearching = useMemo(() => query.trim() !== "", [query]);

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

      <div className="h-full flex flex-col overflow-auto">
        <ContactsSubheader
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
            {chat.type === "private" && (
              <PrivateChatListItem
                chat={chat}
                className={clsx("py-4", {
                  "border-t border-t-neutral-100": i !== 0,
                })}
              />
            )}
          </NavLink>
        ))}

        {filteredChats && !isSearching && (
          <p className="text-center text-xs text-neutral-400 py-3 bg-neutral-100 uppercase mt-auto">
            {Object.entries(filteredChats).length} Chat(s)
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatContacts;
