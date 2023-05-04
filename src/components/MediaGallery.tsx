import { FC } from "react";
import Media from "../app/models/Media";
import MediaItem from "./MediaItem";

interface MediaGalleryProps {
  mediaList: Media[];
}

const MediaGallery: FC<MediaGalleryProps> = props => {
  const { mediaList } = props;

  return (
    <div className="grid grid-cols-3 gap-3 mb-8">
      {mediaList.map(media => (
        <MediaItem
          key={media.id}
          className="col-span-1"
          media={media}
        ></MediaItem>
      ))}
    </div>
  );
};

export default MediaGallery;
