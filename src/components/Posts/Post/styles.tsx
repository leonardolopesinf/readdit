import { lighten } from "polished";
import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 1.2rem 0;
`;

export const PostThumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.7rem;
  min-width: 7.7rem;
  height: 7.7rem;
  min-height: 7.7rem;

  background: ${(props) => props.theme.colors.secondary};
  border-radius: 0.8rem;

  margin-right: 1.3rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
  }

  .error-image {
    width: 80%;
    height: 80%;
  }
`;

export const PostDescription = styled.div`
  width: 100%;

  overflow-x: hidden;

  padding-right: 2rem;

  font-size: 1.6rem;
  line-height: 2rem;

  overflow-wrap: break-word;

  .title {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  div {
    margin-bottom: 0.9rem;

    .created {
      color: ${(props) => props.theme.colors.gray};
    }

    .author {
      color: ${(props) => props.theme.colors.purpleText};

      :hover {
        font-weight: bold;
      }
    }
  }

  .url {
    display: block;
    width: fit-content;
    max-width: 100%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: bold;
    color: ${(props) => props.theme.colors.text};

    :hover {
      color: ${(props) => lighten(0.5, props.theme.colors.text)};
    }
  }
`;
