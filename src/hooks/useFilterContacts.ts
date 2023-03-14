import { useMemo } from "react";
import User from "../data/User";

const useFilterContacts = (contacts: User[], query: string) => {
  const filteredContacts = useMemo(
    () =>
      contacts?.filter((c) =>
        `${c.name.first} ${c.name.last}`
          .toLowerCase()
          .includes(query.trim().toLowerCase())
      ) || null,
    [contacts, query]
  );

  return filteredContacts;
};

export default useFilterContacts;
