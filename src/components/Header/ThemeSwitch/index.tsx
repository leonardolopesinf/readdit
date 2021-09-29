import React, { useContext, useMemo } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { SwitchContainer, SwitchInput } from "./styles";

const ThemeSwitch: React.FC = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  const switchValue = useMemo(() => themeName === "dark", [themeName]);

  return (
    <SwitchContainer>
      <SwitchInput onClick={toggleTheme}>
        <span className="moon">&#127772;</span>
        <span className="sun">&#127774;</span>
        <input checked={switchValue} type="checkbox" />
        <div className="circle" />
      </SwitchInput>
    </SwitchContainer>
  );
};

export default ThemeSwitch;
