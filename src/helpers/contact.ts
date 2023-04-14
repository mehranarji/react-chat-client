import User from "../app/models/User";
import { Status } from "../app/models/Status";
import _ from "lodash";

export const findContactById = (id: number, contacts: User[]) => {
  return contacts.find(contact => contact.id === id);
};

export const isOnline = (contact: User) => {
  return contact.status === Status.Online || contact.status === Status.Typing;
};

export const listOfNames = (contacts: User[], limit = -1) => {
  if (limit < 0 || limit >= contacts.length) {
    limit = Math.max(1, contacts.length - 1);
  } else if (limit === 0) {
    return contacts.length;
  }

  const included = _.take(contacts, limit);
  const excluded = _.takeRight(contacts, contacts.length - limit);

  return [
    included.map(contact => contact.first_name).join(", "),
    excluded.length === 0
      ? null
      : excluded.length === 1
      ? excluded[0].first_name
      : `${excluded.length} others`,
  ]
    .filter(i => i)
    .join(" and ");
};
