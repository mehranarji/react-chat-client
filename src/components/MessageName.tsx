import { FC } from "react";

interface MessageNameProps {
  name: string;
}

const MessageName: FC<MessageNameProps> = props => {
  const { name } = props;
  return <span className="font-bold">{name}</span>;
};

export default MessageName;
