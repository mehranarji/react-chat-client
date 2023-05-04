import { FC } from "react";

interface ImageMessageProps {
  src?: string;
  alt?: string;
  caption?: string;
}

const ImageMessage: FC<ImageMessageProps> = props => {
  const { src, alt, caption } = props;

  return (
    <figure>
      <img src={src} alt={alt} className="w-full" />
      <div className="p-4">{!!caption && <figcaption>{caption}</figcaption>}</div>
    </figure>
  );
};

export default ImageMessage;
