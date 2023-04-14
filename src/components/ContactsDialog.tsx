import { Dialog } from "@headlessui/react";
import { FC, useState } from "react";
import User from "../app/models/User";
import ContactList from "./ContactList";
import TextInputFilled from "./TextInputFilled";
import { useAppSelector } from "../app/hooks";
import { selectContacts } from "../features/contacts/contactsSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ContactsDialogProps {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onSelect?: (contact: User) => void;
}

const ContactsDialog: FC<ContactsDialogProps> = props => {
  const { title, isOpen = false, onClose, onSelect } = props;
  const [query, setQuery] = useState("");
  const contacts = useAppSelector(selectContacts({ query }));

  return (
    <Dialog onClose={() => onClose?.()} open={isOpen} className="relative z-10">
      <div className="fixed inset-0 bg-black bg-opacity-25" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="w-full max-w-md overflow-auto transform rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
            {title && (
              <Dialog.Title className="flex items-center p-4 border-b border-b-neutral-100">
                <span className="inline-block">{title}</span>
                <button
                  onClick={() => onClose?.()}
                  className="ml-auto p-2 text-neutral-400 hover:text-neutral-600"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </Dialog.Title>
            )}
            <div>
              <div className="p-4 border-b border-b-neutral-100">
                <TextInputFilled
                  value={query}
                  onChange={ev => setQuery(ev.target.value)}
                  placeholder="Search..."
                />
              </div>

              <div className="h-96 overflow-auto">
                <ContactList
                  contacts={contacts}
                  onSelect={contact => onSelect?.(contact)}
                />
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default ContactsDialog;
