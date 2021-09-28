import styled from "styled-components";

export const PostSkeletonContainer = styled.div`
  width: 100%;
`;

export const PostSkeletonItem = styled.div`
  width: 100%;
  height: 10.1rem;

  .divider {
    opacity: 0.3;
  }
`;

export const PostSkeletonRow = styled.div`
  display: flex;
  flex-direction: row;

  margin: 1.2rem 0;

  .image {
    width: 7.7rem;
    font-size: 7.7rem;
    line-height: 7.7rem;

    margin-right: 1.3rem;
  }
`;

export const PostSkeletonColumn = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  font-size: 2rem;
  line-height: 2rem;

  .title {
    width: 30%;

    margin-bottom: 0.5rem;

    font-size: 2rem;
    line-height: 2rem;
  }

  .created {
    width: 40%;

    margin-bottom: 0.9rem;
  }

  .url {
    width: 70%;
  }
`;
