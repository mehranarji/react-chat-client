import {
  BoltIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { fetchAll } from "../features/contacts/contactsSlice";
import ContactListItem from "./ContactListItem";
import SubHeader from "./SubHeader";
import TextInputFilled from "./TextInputFilled";

interface ChatContactsProps {
  className?: string;
}

const ChatContacts: FC<ChatContactsProps> = (props) => {
  const { className } = props;
  const [query, setQuery] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const contacts = useSelector((s: RootState) => s.contacts.contacts);

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  const filteredContacts = useMemo(() =>
    contacts?.filter((c) =>
      `${c.name.first} ${c.name.last}`
        .toLowerCase()
        .includes(query.trim().toLowerCase())
    ),
    [contacts, query]
  );

  return (
    <div className={clsx("flex flex-col overflow-hidden h-full ", className)}>
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
        {filteredContacts && <div>

          {query.trim() === "" && <SubHeader
            text="All message"
            className="sticky top-0 bg-white py-2 px-6"
            icon={<ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4" />}
          />}

          {query.trim() !== "" && <SubHeader
            text="Filtered"
            className="sticky top-0 bg-white py-2 px-6"
            icon={<FunnelIcon className="w-4 h-4" />}
          />}

          {filteredContacts.map((contact, i) => (
            <button className="px-9 hover:bg-neutral-50 w-full" key={i}>
              <ContactListItem
                user={contact}
                className={clsx("py-4", {
                  "border-t border-t-neutral-100": i !== 0,
                })}
              />
            </button>
          ))}
        </div>}
      </div>
    </div>
  );
};

export default ChatContacts;
