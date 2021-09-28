import { darken } from "polished";
import styled from "styled-components";

export const ShowMoreButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 98%;
  height: 4.8rem;

  margin: 0.9rem 0 0 0;

  font-weight: 600;
  font-size: 2rem;
  line-height: 2.5rem;
  color: ${(props) => props.theme.colors.highlightText};

  background: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 0.8rem;

  cursor: pointer;

  :hover {
    background: ${(props) => darken(0.05, props.theme.colors.primary)};
  }

  .plus {
    position: relative;

    width: 1.5rem;
    height: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 1.3rem;
  }

  .bar-one,
  .bar-two {
    position: absolute;

    width: 100%;
    height: 0.3rem;

    background: ${(props) => props.theme.colors.highlightText};

    border-radius: 0.2rem;
  }

  .bar-two {
    transform: rotate(90deg);
  }
`;
