import React, { useCallback, useState } from "react";
import { ShowMoreButton } from "./styles";

type Props = {
  onClick: () => Promise<void>;
};

const ShowMore: React.FC<Props> = ({ onClick }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = useCallback(async () => {
    setLoading(true);

    await onClick();

    setLoading(false);
  }, [onClick]);

  return (
    <ShowMoreButton onClick={handleClick}>
      {!loading ? (
        <>
          <div className="plus">
            <div className="bar-one" />
            <div className="bar-two" />
          </div>
          Ver Mais
        </>
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/assets/loading.svg`}
          alt="loading"
        />
      )}
    </ShowMoreButton>
  );
};

export default ShowMore;
