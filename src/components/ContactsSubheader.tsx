import {
  ChatBubbleOvalLeftEllipsisIcon,
  FunnelIcon,
  NoSymbolIcon,
} from "@heroicons/react/20/solid";
import { FC } from "react";
import User from "../data/User";
import SubHeader from "./SubHeader";

interface ContactsSubheaderProps {
  isSearch?: boolean;
  contacts?: User[];
  className?: string;
}

const ContactsSubheader: FC<ContactsSubheaderProps> = (props) => {
  const { contacts, isSearch,className } = props;

  if (isSearch && (!contacts || contacts.length === 0)) {
    return (
      <SubHeader
        text="No contact found"
        className={className}
        icon={<NoSymbolIcon className="w-4 h-4" />}
      />
    );
  }

  if (isSearch)
    return (
      <SubHeader
        text="Filtered"
        className={className}
        icon={<FunnelIcon className="w-4 h-4" />}
      />
    );

  return (
    <SubHeader
      text="All message"
      className={className}
      icon={<ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4" />}
    />
  );
};

export default ContactsSubheader;
