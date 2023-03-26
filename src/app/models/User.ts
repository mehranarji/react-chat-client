import { Status } from "./Status";

interface User {
  id: number;

  first_name: string;
  last_name: string;

  picture: {
    large: string;
    thumbnail: string;
  };
  status?: Status;
}

export default User;
