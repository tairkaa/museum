import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Theme,
  presetGpnDark,
  presetGpnDefault,
  presetGpnDisplay,
} from "@consta/uikit/Theme";
import { MainPage } from "./components/MainPage/MainPage";
import { AddPhotoPage } from "./components/AddPhotoPage/AddPhotoPage";
import { ImportCsvPage } from "./components/ImportCsvPage/ImportCsvPage";

const themes = {
  display: presetGpnDisplay,
  dark: presetGpnDark,
  default: presetGpnDefault,
};

const App = () => {
  const [theme, setTheme] = useState("default");
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState("Процессоры");

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "display" ? "dark" : prev === "dark" ? "default" : "display"
    );
  };

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  const handleToggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <Theme className="App" preset={themes[theme]}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                onToggleTheme={toggleTheme}
                currentTheme={theme}
                isAdmin={isAdmin}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                onToggleAdmin={handleToggleAdmin}
              />
            }
          />
          <Route
            path="/addphoto"
            element={
              <AddPhotoPage
                onToggleTheme={toggleTheme}
                currentTheme={theme}
                isAdmin={isAdmin}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                onToggleAdmin={handleToggleAdmin}
              />
            }
          />
          <Route
            path="/importcsv"
            element={
              <ImportCsvPage
                onToggleTheme={toggleTheme}
                currentTheme={theme}
                isAdmin={isAdmin}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                onToggleAdmin={handleToggleAdmin}
              />
            }
          />
        </Routes>
      </Router>
    </Theme>
  );
};

export default App;
