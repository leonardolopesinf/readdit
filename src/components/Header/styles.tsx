import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 9.1rem;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const HeaderTitle = styled.h1`
  font-size: 3.6rem;
  line-height: 4.5rem;

  user-select: none;

  .react {
    color: ${(props) => props.theme.colors.highlightText};
  }

  .js {
    color: ${(props) => props.theme.colors.complementary};
  }
`;
