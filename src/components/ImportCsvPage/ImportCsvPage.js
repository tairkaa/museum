import React from "react";
import { Layout } from "@consta/uikit/Layout";
import { HeaderPro } from "../Header/Header";
import { useNavigate } from "react-router-dom";
import "./ImportCsvPage.css";

export function ImportCsvPage({
  onToggleTheme,
  currentTheme,
  isAdmin,
  activeTab,
  onTabChange,
  onToggleAdmin,
}) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Layout direction="column" className="ImportCsvPage">
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

      <Layout className="import-csv-page__content">
        <div className="import-csv-page__main">
          <h1>Здесь будет импорт CSV</h1>
        </div>
      </Layout>
    </Layout>
  );
}
