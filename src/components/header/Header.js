import React, { useState } from "react";
import { Layout } from "@consta/header/Layout";

import { HeaderTopheader } from "./-TopHeader/Header-TopHeader";
import { HeaderTabs } from "./-Tabs/Header-Tabs";
import { HeaderSearch } from "./-Search/Header-Search";
import { HeaderButtons } from "./-Buttons/Header-Buttons";

import "./Header.css";

export function HeaderPro({
  isAdmin,
  onToggleTheme,
  currentTheme,
  onTabChange,
  activeTab = "Процессоры",
  onToggleAdmin,
  onGoHome,
}) {
  const [searchValue, setSearchValue] = useState(null);

  return (
    <div className="header">
      <HeaderTopheader
        isAdmin={isAdmin}
        onToggleTheme={onToggleTheme}
        currentTheme={currentTheme}
        onToggleAdmin={onToggleAdmin}
        onGoHome={onGoHome}
      />

      <Layout
        rowCenter={{
          left: <HeaderTabs onTabChange={onTabChange} activeTab={activeTab} />,
          center: (
            <HeaderSearch value={searchValue} onChange={setSearchValue} />
          ),
          right: <HeaderButtons isAdmin={isAdmin} />,
        }}
      />
    </div>
  );
}

export function HeaderUser() {
  return <div>HeaderUser</div>;
}

export function HeaderNoSearch() {
  return <div>HeaderNoSearch</div>;
}
