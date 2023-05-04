import { FC, useMemo } from "react";
import { PrivateChat } from "../app/models/Chat";
import { IdentificationIcon, PhotoIcon } from "@heroicons/react/20/solid";
import SubHeader from "./SubHeader";
import { useAppSelector } from "../app/hooks";
import { selectContact } from "../features/contacts/contactsSlice";
import MediaGallery from "./MediaGallery";
import { getMediaList } from "../helpers/chat";

interface PrivateChatInfoProps {
  chat: PrivateChat;
}

const PrivateChatInfo: FC<PrivateChatInfoProps> = props => {
  const { chat } = props;
  const contact = useAppSelector(selectContact(chat.id));
  const chatMediaList = useMemo(() => getMediaList(chat), [chat]);

  if (!contact) return <></>;

  return (
    <>
      {contact.bio && (
        <>
          <SubHeader
            className="mb-2"
            text="Bio"
            icon={<IdentificationIcon className="w-5" />}
          />
          <p className="text-lg mb-8">{contact.bio}</p>
        </>
      )}

      {chatMediaList.length > 0 && (
        <>
          <SubHeader
            className="mb-2"
            text={`Media (${chatMediaList.length})`}
            icon={<PhotoIcon className="w-5" />}
          >
            <a
              href="/"
              className="text-green-700 underline-offset-4 underline ml-auto"
            >
              Show All
            </a>
          </SubHeader>
          <MediaGallery mediaList={chatMediaList} />
        </>
      )}
    </>
  );
};

export default PrivateChatInfo;
