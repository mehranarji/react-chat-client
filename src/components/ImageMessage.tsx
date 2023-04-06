import { FC } from "react";

interface ImageMessageProps {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  caption?: string;
}

const ImageMessage: FC<ImageMessageProps> = props => {
  const { src, height, width, alt, caption } = props;

  return (
    <figure>
      <img src={src} alt={alt} width={width} height={height} />
      {!!caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default ImageMessage;
