import { FC, useMemo } from "react";
import { GroupChat } from "../app/models/Chat";
import { useAppSelector } from "../app/hooks";
import { selectGroupMembers } from "../features/chats/chatsSlice";
import { Status } from "../app/models/Status";
import AnimatingDots from "./AnimatingDots";
import { listOfNames } from "../helpers/contact";
import pluralize from "pluralize";

interface GroupStatusProps {
  chat: GroupChat;
}

const GroupStatus: FC<GroupStatusProps> = props => {
  const { chat } = props;
  const members = useAppSelector(selectGroupMembers({ chatId: chat.id }));

  const onlineMembers = useMemo(
    () => members?.filter(member => member.status === Status.Online) || [],
    [members]
  );

  const typingMembers = useMemo(
    () => members?.filter(member => member.status === Status.Typing) || [],
    [members]
  );

  if (typingMembers.length > 0) {
    return (
      <span className="text-green-700">
        {listOfNames(typingMembers, 0)}{" "}
        {pluralize("is", typingMembers.length)}{" "}
        typing <AnimatingDots />
      </span>
    );
  }

  return (
    <span className="text-neutral-400">
      {`${chat.contact_ids.length} members`}
      {onlineMembers.length > 0 && `, ${onlineMembers.length} online`}
    </span>
  );
};

export default GroupStatus;
