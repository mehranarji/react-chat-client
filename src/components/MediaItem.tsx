import clsx from "clsx";
import { FC } from "react";
import Media from "../app/models/Media";

interface MediaItemProps {
  media: Media;
  className?: string;
}

const MediaItem: FC<MediaItemProps> = props => {
  const { className, media } = props;
  return (
    <div
      className={clsx("aspect-square rounded-lg overflow-hidden", className)}
    >
      {media.type === "image" && (
        <img
          className="w-full h-full object-cover"
          src={media.src}
          alt={media.title}
        />
      )}
    </div>
  );
};

export default MediaItem;
