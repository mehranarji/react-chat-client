import { Status } from "./Status";

interface User {
  id: {
    name: string;
    value: string;
  };
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };

  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  Status: Status;
}

export default User;
