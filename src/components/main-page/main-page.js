import { Layout } from "@consta/uikit/Layout";
import { HeaderPro } from "../header/header";
import { CpuTab } from "../cpu-tab/cpu-tab";
import { MbTab } from "../mb-tab/mb-tab";
import { MemTab } from "../mem-tab/mem-tab";
import { useState } from "react";
import "./main-page.css";

export function MainPage({ onToggleTheme, currentTheme }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState("Процессоры");

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  const handleToggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  const renderPageContent = () => {
    switch (activeTab) {
      case "Процессоры":
        return <CpuTab />;
      case "Материнские платы":
        return <MbTab />;
      case "Устройства хранения":
        return <MemTab />;
      default:
        return <CpuTab />;
    }
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

      {renderPageContent()}
    </Layout>
  );
}
