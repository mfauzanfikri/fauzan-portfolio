import { ComponentPropsWithoutRef, useEffect, useState } from "react";

type ImgProps = ComponentPropsWithoutRef<"img">;

const PorgressiveImg = ({
  placeholderSrc,
  src,
  props: { ...props },
}: {
  placeholderSrc: string;
  src: string;
  props: ImgProps;
}) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return <img src={imgSrc} {...props} />;
};

export default PorgressiveImg;
