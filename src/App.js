import "./App.css";

import React from "react";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { MainPage } from "./components/mainPage/MainPage";

const App = () => (
  <Theme style={{ height: "100vh", width: "100vw" }} preset={presetGpnDefault}>
    <MainPage />
  </Theme>
);

export default App;
