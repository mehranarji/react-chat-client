import { useMemo } from "react";
import User from "../app/models/User";

const useFilterContacts = (contacts: User[], query: string) => {
  const filteredContacts = useMemo(
    () =>
      contacts?.filter((c) =>
        `${c.first_name} ${c.last_name}`
          .toLowerCase()
          .includes(query.trim().toLowerCase())
      ) || null,
    [contacts, query]
  );

  return filteredContacts;
};

export default useFilterContacts;
