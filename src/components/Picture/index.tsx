import React, { SyntheticEvent, useCallback } from "react";

type Props = {
  alt: string;
  defaultSrc: string;
  src: string;
};

const Picture: React.FC<Props> = ({ alt, defaultSrc, src }) => {
  const handleError = useCallback(
    (event: SyntheticEvent<HTMLImageElement, Event>) => {
      const img = event.currentTarget;
      img.onerror = null;
      img.src = defaultSrc;
      img.className = "error-image";
    },
    [defaultSrc]
  );

  return <img src={src} alt={alt} onError={handleError} />;
};

export default Picture;
