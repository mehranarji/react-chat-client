import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ChatsListFragment from "../components/ChatsListFragment";
import ChatMessagesFragment from "../components/ChatMessagesFragment";
import EmptyChatMain from "../components/EmptyChatMain";
import ChatInfoFragment from "../components/ChatInfoFragment";

interface ChatViewProps {}

const ChatView: FC<ChatViewProps> = () => {
  return (
    <div className="grid grid-cols-12 h-full">
      <ChatsListFragment className="col-span-5 xl:col-span-3 2xl:col-span-3 border-r border-r-neutral-100" />

      <Routes>
        <Route
          index
          element={
            <EmptyChatMain className="col-span-7 xl:col-span-6" />
            }
          />

        <Route
          path="/:id"
          element={
            <ChatMessagesFragment className="col-span-7 xl:col-span-6" />
          }
        />
      </Routes>

      <ChatInfoFragment className="hidden xl:block col-span-3 border-l border-l-neutral-100" />
    </div>
  );
};

export default ChatView;
