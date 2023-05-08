import { FC } from "react";

interface TextMessageProps {
  text?: string;
}

const TextMessage: FC<TextMessageProps> = props => {
  const { text } = props;
  return <p className="p-4 whitespace-pre">{text}</p>;
};

export default TextMessage;
