import React from "react";
import { Layout } from "@consta/uikit/Layout";
import { Button } from "@consta/uikit/Button";
import { HeaderPro } from "../header/header";
import { useNavigate } from "react-router-dom";
import "./add-photo-page.css";

export function AddPhotoPage({
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
    <Layout direction="column" className="AddPhotoPage">
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

      <Layout className="add-photo-page__content">
        <div className="add-photo-page__main">
          <h1>Здесь будет загрузка фото</h1>
        </div>
      </Layout>
    </Layout>
  );
}
