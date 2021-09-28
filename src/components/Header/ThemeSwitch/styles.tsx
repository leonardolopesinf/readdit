import { darken, lighten } from "polished";
import styled from "styled-components";

export const SwitchContainer = styled.div`
  position: absolute;
  right: 3rem;
`;

export const SwitchInput = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 6.2rem;
  height: 3rem;

  padding: 0 0.2rem;

  border-radius: 2rem;

  background: ${(props) => darken(0.15, props.theme.colors.primary)};

  font-size: 2rem;

  cursor: pointer;
  user-select: none;

  .moon {
    margin-right: auto;
  }

  .sun {
  }

  input {
    display: none;
  }

  .circle {
    position: absolute;
    left: 0.3rem;

    width: 2.6rem;
    height: 2.6rem;

    border-radius: 50%;

    background: ${(props) => lighten(0.3, props.theme.colors.secondary)};

    transition: all 0.5s ease;
  }

  input:checked + .circle {
    left: 3.3rem;
  }
`;
