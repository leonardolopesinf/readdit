import React, { SyntheticEvent, useCallback } from "react";

type Props = {
  alt: string;
  src: string;
};

const Picture: React.FC<Props> = ({ alt, src }) => {
  const handleError = useCallback(
    (event: SyntheticEvent<HTMLImageElement, Event>) => {
      const img = event.currentTarget;
      const defaultImg = "https://cdn-icons-png.flaticon.com/512/52/52053.png";

      img.onerror = null;
      img.src = defaultImg;
      img.className = "error-image";
    },
    []
  );

  return (
    <img data-testid="picture" src={src} alt={alt} onError={handleError} />
  );
};

export default Picture;
