import { FC, useMemo } from "react";
import { Status } from "../app/models/Status";

interface ContactStatusProps {
  status?: Status;
}

const ContactStatus: FC<ContactStatusProps> = props => {
  const { status } = props;

  const textColor = useMemo(() => {
    if (status === Status.Online) {
      return "text-green-700";
    }

    return "text-neutral-400";
  }, [status]);

  if (!status) {
    return <></>;
  }

  return <span className={textColor}>{status.toLowerCase()}</span>;
};

export default ContactStatus;
