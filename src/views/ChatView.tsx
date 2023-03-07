import { FC } from "react";
import ChatMain from "../components/ChatMain";

interface ChatViewProps {}

const ChatView: FC<ChatViewProps> = (props) => {
  return (
    <div className="grid grid-cols-6 h-full">
      <aside className="col-span-2 lg:col-span-1">Contacts goes here</aside>

      <ChatMain className="flex flex-col col-span-4" />

      <aside className="col-span-1 hidden lg:block">Info</aside>
    </div>
  );
};

export default ChatView;
