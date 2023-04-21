import {
  DocumentTextIcon,
  FolderIcon,
  IdentificationIcon,
  PhotoIcon,
  SpeakerWaveIcon,
  UsersIcon,
  VideoCameraIcon as VideoCameraIconSolid 
} from "@heroicons/react/20/solid";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { FC } from "react";
import ListItem from "./ListItem";
import SubHeader from "./SubHeader";
import UserAvatar from "./UserAvatar";
import MediaItem from "./MediaItem";
import IconAvatar from "./IconAvatar";

interface ChatInfoFragmentProps {
  className?: string;
}

const ChatInfoFragment: FC<ChatInfoFragmentProps> = props => {
  const { className } = props;
  return (
    <aside className={clsx("flex flex-col overflow-auto h-full", className)}>
      <div className="p-8 flex items-start">
        <h2 className="font-bold text-3xl">Design Team</h2>
      </div>

      <div className="px-8">
        <SubHeader
          className="mb-2"
          text="Description"
          icon={<IdentificationIcon className="w-5" />}
        />
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam vel,
          enim dolore cupiditate voluptate incidunt aspernatur explicabo nemo
          molestias quibusdam!
        </p>

        <SubHeader
          className="mb-2"
          text="Members (12)"
          icon={<UsersIcon className="w-5" />}
        >
          <a
            href="/"
            className="text-green-700 underline-offset-4 underline ml-auto"
          >
            Show All
          </a>
        </SubHeader>
        <ul className="mb-8">
          {new Array(4).fill(null).map(() => (
            <li className="py-1.5">
              <ListItem avatar={<UserAvatar src="https://placehold.co/300" />}>
                <div className="flex items-center">
                  <p className="font-semibold truncate">Putri avec</p>

                  <button className="ml-auto rounded-full hover:bg-neutral-50 p-2">
                    <VideoCameraIcon className="text-neutral-400 w-6" />
                  </button>

                  <button className="rounded-full hover:bg-neutral-50 p-2">
                    <ChatBubbleOvalLeftEllipsisIcon className="text-neutral-400 w-6" />
                  </button>
                </div>
              </ListItem>
            </li>
          ))}
        </ul>

        <SubHeader
          className="mb-2"
          text="Media (29)"
          icon={<PhotoIcon className="w-5" />}
        >
          <a
            href="/"
            className="text-green-700 underline-offset-4 underline ml-auto"
          >
            Show All
          </a>
        </SubHeader>
        <div className="grid grid-cols-3 gap-3 mb-8">
          {new Array(5).fill(null).map(() => (
            <MediaItem className="col-span-1">
              <img
                src="https://placehold.co/300x500"
                alt=""
                className="w-full h-full object-cover"
              />
            </MediaItem>
          ))}
          <MediaItem className="col-span-1 relative">
            <img
              src="https://placehold.co/500x500"
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm text-white text-xl font-bold">
              +3
            </div>
          </MediaItem>
        </div>

        <SubHeader
          className="mb-2"
          text="File Type (5)"
          icon={<FolderIcon className="w-5" />}
        ></SubHeader>
        <ul className="mb-8">
          <li className="py-1.5">
            <ListItem
              avatar={<IconAvatar><DocumentTextIcon className="w-6 text-green-700" /></IconAvatar>}
            >
                <p className="font-bold">Documents</p>
                <p className="text-neutral-500">3 file</p>
            </ListItem>
          </li>

          <li className="py-1.5">
            <ListItem
              avatar={<IconAvatar><VideoCameraIconSolid className="w-6 text-green-700" /></IconAvatar>}
            >
                <p className="font-bold">Videos</p>
                <p className="text-neutral-500">4 file</p>
            </ListItem>
          </li>

          <li className="py-1.5">
            <ListItem
              avatar={<IconAvatar><PhotoIcon className="w-6 text-green-700" /></IconAvatar>}
            >
                <p className="font-bold">Pictures</p>
                <p className="text-neutral-500">85 file</p>
            </ListItem>
          </li>

          <li className="py-1.5">
            <ListItem
              avatar={<IconAvatar><SpeakerWaveIcon className="w-6 text-green-700" /></IconAvatar>}
            >
                <p className="font-bold">Sounds</p>
                <p className="text-neutral-500">15 file</p>
            </ListItem>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default ChatInfoFragment;
