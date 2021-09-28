import styled from "styled-components";

export const PostListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  list-style-type: none;

  li {
    width: 100%;
  }

  .divider {
    height: 0.1rem;
    background: ${(props) => props.theme.colors.gray};
  }
`;
