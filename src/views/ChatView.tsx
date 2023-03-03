import { FC } from "react";
import ChatHeader from "../components/ChatHeader";

interface ChatViewProps {}

const ChatView: FC<ChatViewProps> = (props) => {
  return (
    <div className="grid grid-cols-4 h-full">
      <aside className="col-span-1">
        Contacts goes here
      </aside>
      <main className="
        col-span-2
        flex flex-col
        overflow-hidden
        border-x border-x-neutral-100
      ">
        <ChatHeader />
        <div className="
          flex-1
          overflow-auto
          flex flex-col-reverse flex-nowrap
          bg-neutral-50
          gap-2
          p-8
        ">
          {Array(35)
            .fill(null)
            .map((_, i) => (
              <p className="bg-blue-500 p-5">{i + 1}</p>
            ))}
        </div>
        <div>Footer</div>
      </main>
      <aside className="col-span-1">Info</aside>
    </div>
  );
};

export default ChatView;
