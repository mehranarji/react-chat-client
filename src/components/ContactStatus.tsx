import { FC, useMemo } from "react";
import { Status } from "../app/models/Status";
import AnimatingDots from "./AnimatingDots";

interface ContactStatusProps {
  status: Status;
}

const ContactStatus: FC<ContactStatusProps> = props => {
  const { status } = props;

  const textColor = useMemo(() => {
    if ([Status.Online, Status.Typing].includes(status)) {
      return "text-green-700";
    }

    return "text-neutral-400";
  }, [status]);

  if (!status) {
    return <></>;
  }

  return (
    <>
      <span className={textColor}>
        {status} {status === Status.Typing && <AnimatingDots />}
      </span>
    </>
  );
};

export default ContactStatus;
