import React, { useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ThemeContext } from "styled-components";
import {
  PostSkeletonColumn,
  PostSkeletonContainer,
  PostSkeletonItem,
  PostSkeletonRow,
} from "./styles";

const PostSkeleton: React.FC = () => {
  const theme = useContext(ThemeContext);

  const generateSkeletons = () => {
    const skeletons = [];

    for (let i = 0; i < 10; i++) {
      skeletons.push(
        <PostSkeletonItem key={i}>
          <div className="divider" />
          <PostSkeletonRow>
            <div className="image">
              <Skeleton />
            </div>
            <PostSkeletonColumn>
              <div className="title">
                <Skeleton />
              </div>
              <div className="created">
                <Skeleton />
              </div>
              <div className="url">
                <Skeleton />
              </div>
            </PostSkeletonColumn>
          </PostSkeletonRow>
        </PostSkeletonItem>
      );
    }

    return skeletons;
  };

  return (
    <PostSkeletonContainer>
      <SkeletonTheme
        color={theme.colors.skeletonColor}
        highlightColor={theme.colors.skeletonHightlight}
      >
        {generateSkeletons()}
      </SkeletonTheme>
    </PostSkeletonContainer>
  );
};

export default PostSkeleton;
