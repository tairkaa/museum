import React, { useState } from "react";
import {
  Theme,
  presetGpnDark,
  presetGpnDefault,
  presetGpnDisplay,
} from "@consta/uikit/Theme";
import { MainPage } from "./components/main-page/main-page";

const themes = {
  display: presetGpnDisplay,
  dark: presetGpnDark,
  default: presetGpnDefault,
};

const App = () => {
  const [theme, setTheme] = useState("default");

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "display" ? "dark" : prev === "dark" ? "default" : "display"
    );
  };

  return (
    <Theme className="App" preset={themes[theme]}>
      <MainPage onToggleTheme={toggleTheme} currentTheme={theme} />
    </Theme>
  );
};

export default App;
