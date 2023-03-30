import User from "../app/models/User";

export const findContactById = (id: number, contacts: User[]) => {
  return contacts.find((contact) => contact.id === id);
};
