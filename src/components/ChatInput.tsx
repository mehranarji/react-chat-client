import { FC } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import { MicrophoneIcon, PaperClipIcon } from "@heroicons/react/20/solid";

interface ChatInputProps {}

const ChatInput: FC<ChatInputProps> = (props) => {
  const {} = props;
  return (
    <form>
      <div className="flex items-center bg-neutral-100 rounded-xl">
        <input
          className="w-full h-14 bg-transparent px-6 outline-none text-lg"
          placeholder="Your messages..."
        />

        <div className="flex h-full items-center">
          <button
            type="button"
            className="p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            <PaperClipIcon className="w-4 h-4" />
          </button>

          <button
            type="button"
            className="p-2 text-neutral-400 hover:text-neutral-600 transition-colors mr-1"
          >
            <MicrophoneIcon className="w-4 h-4" />
          </button>

          <div className="h-6 border-r border-r-neutral-200"></div>

          <button type="submit" className="text-green-700 p-4 mr-2">
            <PaperAirplaneIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
