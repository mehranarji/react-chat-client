import { MoreVertical } from "lucide-react";
import { FC } from "react";
import User from "../data/User";

interface PrivateMessageHeaderProps {
  Name: String;
  Status: User["Status"];
}

const PrivateMessageHeader: FC<PrivateMessageHeaderProps> = (props) => {
  const { Name, Status } = props;

  return (
    <>
      <img
        src="https://source.unsplash.com/random/200x200?portrait"
        alt=""
        className="h-full aspect-square rounded-full mr-4"
      />
      <div>
        <p className="font-black text-lg">{ Name }</p>
        <p className="text-neutral-400">{ Status }</p>
      </div>
      <button className="ml-auto">
        <MoreVertical />
      </button>
    </>
  );
};

export default PrivateMessageHeader;
