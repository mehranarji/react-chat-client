import axios from "axios";
import User from "../models/User";

const client = axios.create({
  baseURL: "https://randomuser.me/api/",
});

interface ApiResponse<T> {
  results: T;
}

interface UserData {
  id: {
    name: string;
    value: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  email: string,
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
export const getList = async (count?: number): Promise<User[]> => {
  const {
    data: { results },
  } = await client.get<ApiResponse<UserData[]>>("", {
    params: {
      results: count || Number(process.env.REACT_APP_CONTACT_COUNT),
      nat: "en",
      seed: process.env.REACT_APP_CONTACT_SEED,
    },
  });

  return results.map((user, index) => ({
    id: index,
    first_name: user.name.first,
    last_name: user.name.last,
    picture: {
      large: user.picture.large,
      thumbnail: user.picture.medium,
    },
  }));
};
