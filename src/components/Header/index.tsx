import React from "react";
import { HeaderContainer, HeaderTitle } from "./styles";
import ThemeSwitch from "./ThemeSwitch";

type Props = {
  toggleTheme: () => void;
};

const Header: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <span className="react">REACT</span>
        <span className="js">JS</span>
      </HeaderTitle>
      <ThemeSwitch onChange={toggleTheme} />
    </HeaderContainer>
  );
};

export default Header;
