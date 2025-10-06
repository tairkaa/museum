import React from "react";
import { Tabs } from "@consta/uikit/Tabs";
import { useNavigate, useLocation } from "react-router-dom";

import "./header__tabs.css";

const TAB_ITEMS = ["Процессоры", "Материнские платы", "Устройства хранения"];

export function HeaderTabs({ onTabChange, activeTab }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isOnMainPage = location.pathname === "/";

  const handleTabChange = (newTab) => {
    onTabChange(newTab);

    // Если мы не на главной странице, переходим на главную с выбранным табом
    if (!isOnMainPage) {
      navigate("/");
    }
  };

  return (
    <Tabs
      className="header__tabs"
      value={isOnMainPage ? activeTab : null}
      onChange={handleTabChange}
      items={TAB_ITEMS}
      getItemLabel={(label) => label}
      view="primary"
      size="s"
    />
  );
}
