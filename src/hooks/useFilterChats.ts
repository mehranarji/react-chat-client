import { useSelector } from "react-redux";
import Chat from "../app/models/Chat";
import { selectChats } from "../features/chats/chatsSlice";
import { selectContacts } from "../features/contacts/contactsSlice";

const useFilterChats = (query: string): Chat[] => {
  const chats = useSelector(selectChats);
  const contacts = useSelector(selectContacts);
  const trimmed_query = query.trim();

  return Object.entries(chats).map(([id, chat]) => chat);
};

export default useFilterChats;
