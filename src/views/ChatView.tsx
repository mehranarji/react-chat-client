import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ChatsListFragment from "../components/ChatsListFragment";
import ChatMessagesFragment from "../components/ChatMessagesFragment";
import EmptyChatMain from "../components/EmptyChatMain";

interface ChatViewProps {}

const ChatView: FC<ChatViewProps> = () => {
  return (
    <div className="grid grid-cols-12 h-full">
      <ChatsListFragment className="col-span-5 xl:col-span-4 2xl:col-span-3 border-r border-r-neutral-100" />

      <Routes>
        <Route index element={<EmptyChatMain className="col-span-7 xl:col-span-8 2xl:col-span-9" />} />
        <Route
          path="/:id"
          element={
            <ChatMessagesFragment className="col-span-7 xl:col-span-8 2xl:col-span-9" />
          }
        />
      </Routes>

      {/* <aside className="col-span-1 hidden lg:block">Info</aside> */}
    </div>
  );
};

export default ChatView;
