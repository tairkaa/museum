import { Layout } from "@consta/uikit/Layout";
import { HeaderPro } from "../Header/Header";
import { CpuTab } from "../CpuTab/CpuTab";
import { MbTab } from "../MbTab/MbTab";
import { MemTab } from "../MemTab/MemTab";
import "./MainPage.css";

export function MainPage({
  onToggleTheme,
  currentTheme,
  isAdmin,
  activeTab,
  onTabChange,
  onToggleAdmin,
}) {
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
          onTabChange={onTabChange}
          activeTab={activeTab}
          onToggleAdmin={onToggleAdmin}
        />
      </Layout>
      {renderPageContent()}
    </Layout>
  );
}
