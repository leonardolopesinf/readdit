import React, { useContext, useMemo } from "react";
import { ThemeContext } from "styled-components";
import { SwitchContainer, SwitchInput } from "./styles";

type Props = {
  onChange: () => void;
};

const ThemeSwitch: React.FC<Props> = ({ onChange }) => {
  const { title: theme } = useContext(ThemeContext);

  const switchValue = useMemo(() => theme === "dark", [theme]);

  return (
    <SwitchContainer>
      <SwitchInput onClick={onChange}>
        <span className="moon">&#127772;</span>
        <span className="sun">&#127774;</span>
        <input checked={switchValue} type="checkbox" onChange={onChange} />
        <div className="circle" />
      </SwitchInput>
    </SwitchContainer>
  );
};

export default ThemeSwitch;
