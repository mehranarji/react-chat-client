import User from "../app/models/User";

export const displayName = (user: Pick<User, "first_name" | "last_name">) =>
  `${user.first_name} ${user.last_name}`.trim();
