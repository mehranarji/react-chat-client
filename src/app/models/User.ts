import { Status } from "./Status";

type User = {
  id: number;
  first_name: string;
  last_name: string;
  picture?: {
    large: string;
    thumbnail: string;
  };
  bio?: string;
  status?: Status;
}

export default User;
