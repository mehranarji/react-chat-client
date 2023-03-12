import { Status } from "./Status";

interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  }

  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  }
  Status: Status;
}

export default User;
