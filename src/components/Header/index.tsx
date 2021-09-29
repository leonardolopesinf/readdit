import React from "react";
import { HeaderContainer, HeaderTitle } from "./styles";
import ThemeSwitch from "./ThemeSwitch";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <span className="react">REACT</span>
        <span className="js">JS</span>
      </HeaderTitle>
      <ThemeSwitch />
    </HeaderContainer>
  );
};

export default Header;
