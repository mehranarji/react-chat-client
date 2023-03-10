import {
  BoltIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import {ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { FC } from "react";
import ContactListItem from "./ContactListItem";
import SubHeader from "./SubHeader";
import TextInputFilled from "./TextInputFilled";

interface ChatContactsProps {
  className?: string;
}

const ChatContacts: FC<ChatContactsProps> = (props) => {
  const { className } = props;
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
        />
      </div>

      <div className="overflow-auto space-y-6">
        <div>
          <SubHeader
            text="Pinned"
            className="sticky top-0 bg-white py-2 px-6"
            icon={<BoltIcon className="w-4 h-4" />}
          />
          {Array(3)
            .fill(true)
            .map((_, i) => (
              <button className="px-9 hover:bg-neutral-50 w-full" key={i}>
                <ContactListItem
                  className={clsx("py-4", {
                    "border-t border-t-neutral-100": i !== 0,
                  })}
                />
              </button>
            ))}
        </div>
        <div>
          <SubHeader
            text="All message"
            className="sticky top-0 bg-white py-2 px-6"
            icon={<ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4" />}
          />
          {Array(25)
            .fill(true)
            .map((_, i) => (
              <button className="px-9 hover:bg-neutral-50 w-full" key={i}>
                <ContactListItem
                  className={clsx("py-4", {
                    "border-t border-t-neutral-100": i !== 0,
                  })}
                />
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChatContacts;
