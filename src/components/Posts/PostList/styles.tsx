import styled from "styled-components";

export const PostListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  li {
    width: 100%;
  }

  .divider {
    height: 0.1rem;
    background: ${(props) => props.theme.colors.gray};
  }

  .error-message {
    margin-top: 1.5%;

    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;

    color: ${(props) => props.theme.colors.text};
  }
`;
