import "./App.css";

import React from "react";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { FiltersAndContent } from "./components/filtersAndContent/FiltersAndContent.js";

const App = () => (
  <Theme preset={presetGpnDefault}>
    <FiltersAndContent />
  </Theme>
);

export default App;
