import React from "react";

type Props = {
  displayLoading: boolean;
  loading: React.FC;
};

const LoadingContainer: React.FC<Props> = ({
  displayLoading,
  loading: Loading,
  children,
}) => {
  return !displayLoading ? <>{children}</> : <Loading />;
};

export default LoadingContainer;
