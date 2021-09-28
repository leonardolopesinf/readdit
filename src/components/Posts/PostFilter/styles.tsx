import { darken } from "polished";
import styled from "styled-components";

export const PostFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-bottom: 2rem;

  @media (max-width: 320px) {
    flex-direction: column;

    button {
      width: 100%;
      margin: 0 0 1rem 0;
    }
  }
`;

type PostFilterButtonProps = {
  active?: boolean;
};

export const PostFilterButton = styled.button<PostFilterButtonProps>`
  width: 20.2rem;
  height: 4.8rem;

  border: none;
  border-radius: 0.8rem;

  margin-right: 1.6rem;

  background: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.secondary};

  font-family: "Mulish", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.5rem;

  color: ${(props) => props.theme.colors.highlightText};

  cursor: pointer;
  user-select: none;

  :hover {
    background: ${(props) =>
      props.active
        ? props.theme.colors.primary
        : darken(0.1, props.theme.colors.secondary)};
  }

  :last-child {
    margin-right: 0;
  }
`;
