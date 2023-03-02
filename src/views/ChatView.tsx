import { FC } from "react";

interface ChatViewProps {}

const ChatView: FC<ChatViewProps> = (props) => {
  return (
    <div className="grid grid-cols-4 h-full">
      <aside className="col-span-1 border-r border-r-neutral-100">
        Contacts goes here
      </aside>
      <main className="col-span-2 flex flex-col overflow-hidden">
        <div>Header</div>
        <div className="flex-1 overflow-auto flex flex-col-reverse flex-nowrap">
          {Array(35)
            .fill(null)
            .map((_, i) => (
              <p className="bg-blue-500 p-5 mt-2">{i + 1}</p>
            ))}
        </div>
        <div>Footer</div>
      </main>
      <aside className="col-span-1 border-l border-l-neutral-100">Info</aside>
    </div>
  );
};

export default ChatView;
