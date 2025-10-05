import { Layout } from "@consta/uikit/Layout";
import { HeaderPro } from "../header/Header";
import { Content } from "../content/Content";
import { useState } from "react";
import { Filters } from "../filters/Filters";
import "./MainPage.css";

export function MainPage({ onToggleTheme, currentTheme }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState("Процессоры");

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  const handleToggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <Layout direction="column" className="MainPage">
      <Layout>
        <HeaderPro
          isAdmin={isAdmin}
          onToggleTheme={onToggleTheme}
          currentTheme={currentTheme}
          onTabChange={handleTabChange}
          activeTab={activeTab}
          onToggleAdmin={handleToggleAdmin}
        />
      </Layout>

      <Layout direction="row" className="FiltersAndContent">
        <Filters />
        <Content />
      </Layout>
    </Layout>
  );
}
