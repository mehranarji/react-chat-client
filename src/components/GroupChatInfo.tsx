import {
  DocumentTextIcon,
  FolderIcon,
  IdentificationIcon,
  PhotoIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import { FC, useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import { GroupChat } from "../app/models/Chat";
import { selectGroupMembers } from "../features/chats/chatsSlice";
import { getMediaList } from "../helpers/chat";
import GroupContactList from "./GroupContactList";
import IconAvatar from "./IconAvatar";
import ListItem from "./ListItem";
import MediaGallery from "./MediaGallery";
import SubHeader from "./SubHeader";

interface GroupChatInfoProps {
  chat: GroupChat;
}

const GroupChatInfo: FC<GroupChatInfoProps> = props => {
  const { chat } = props;
  const contacts = useAppSelector(selectGroupMembers(chat.id));

  const chatMediaList = useMemo(() => getMediaList(chat), [chat]);

  return (
    <>
      {chat.description && (
        <>
          <SubHeader
            className="mb-2"
            text="Description"
            icon={<IdentificationIcon className="w-5" />}
          />
          <p className="text-lg mb-8">{chat.description}</p>
        </>
      )}

      <SubHeader
        className="mb-2"
        text={`Members (${contacts.length})`}
        icon={<UsersIcon className="w-5" />}
      ></SubHeader>
      <GroupContactList contacts={contacts} className="mb-8" />

      {chatMediaList.length > 0 && (
        <>
          <SubHeader
            className="mb-2"
            text={`Media (${chatMediaList.length})`}
            icon={<PhotoIcon className="w-5" />}
          ></SubHeader>
          <MediaGallery mediaList={chatMediaList} />
        </>
      )}

      <SubHeader
        className="mb-2"
        text="File Type (5)"
        icon={<FolderIcon className="w-5" />}
      />
      <ul className="mb-8">
        <li className="py-1.5">
          <ListItem
            avatar={
              <IconAvatar>
                <DocumentTextIcon className="w-6 text-green-700" />
              </IconAvatar>
            }
          >
            <p className="font-bold">Documents</p>
            <p className="text-neutral-500">3 file</p>
          </ListItem>
        </li>
      </ul>
    </>
  );
};

export default GroupChatInfo;
