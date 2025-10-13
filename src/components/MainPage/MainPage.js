import { Layout } from "@consta/uikit/Layout";
import { HeaderPro } from "../Header/Header";
import { CpuTab } from "../CpuTab/CpuTab";
import { MbTab } from "../MbTab/MbTab";
import { MemTab } from "../MemTab/MemTab";
import { HomePage } from "../HomePage/HomePage";
import "./MainPage.css";

export function MainPage({
  onToggleTheme,
  currentTheme,
  isAdmin,
  activeTab,
  onTabChange,
  onToggleAdmin,
  onGoHome,
}) {
  const renderPageContent = () => {
    switch (activeTab) {
      case "Процессоры":
        return <CpuTab />;
      case "Материнские платы":
        return <MbTab />;
      case "Устройства хранения":
        return <MemTab />;
      case null:
      case "Home":
        return <HomePage />;
      default:
        return <HomePage />;
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
          onGoHome={onGoHome}
        />
      </Layout>
      {renderPageContent()}
    </Layout>
  );
}
