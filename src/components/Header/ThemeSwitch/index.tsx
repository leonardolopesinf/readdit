import React, { useCallback, useContext, useMemo, useRef } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { SwitchContainer, SwitchInput } from "./styles";

const ThemeSwitch: React.FC = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const switchValue = useMemo(() => themeName === "dark", [themeName]);

  const toggleSwitch = useCallback(() => {
    const { current } = inputRef;

    if (current) {
      current.value = themeName === "dark" ? "light" : "dark";
      current.checked = !switchValue;

      toggleTheme();
    }
  }, [toggleTheme, themeName, switchValue]);

  return (
    <SwitchContainer>
      <SwitchInput className="theme-switch" onClick={toggleSwitch}>
        <span className="moon">&#127772;</span>
        <span className="sun">&#127774;</span>
        <input
          ref={inputRef}
          defaultValue={themeName}
          defaultChecked={switchValue}
          type="checkbox"
        />
        <div className="circle" />
      </SwitchInput>
    </SwitchContainer>
  );
};

export default ThemeSwitch;
