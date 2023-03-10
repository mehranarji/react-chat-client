import { FC } from "react";
import ChatContacts from "../components/ChatContacts";
import ChatMain from "../components/ChatMain";

interface ChatViewProps {}

const ChatView: FC<ChatViewProps> = () => {
  return (
    <div className="grid grid-cols-12 h-full">
      <ChatContacts className="col-span-5" />

      <ChatMain className="flex flex-col col-span-7" />

      {/* <aside className="col-span-1 hidden lg:block">Info</aside> */}
    </div>
  );
};

export default ChatView;
