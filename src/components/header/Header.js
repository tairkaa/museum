import React, { useState } from "react";
import { Layout } from "@consta/header/Layout";

import { HeaderTopheader } from "./__topheader/header__topheader";
import { HeaderTabs } from "./__tabs/header__tabs";
import { HeaderSearch } from "./__search/header__search";
import { HeaderButtons } from "./__buttons/header__buttons";

import "./header.css";

export function HeaderPro({
  isAdmin,
  onToggleTheme,
  currentTheme,
  onTabChange,
  activeTab = "Процессоры",
  onToggleAdmin,
}) {
  const [searchValue, setSearchValue] = useState(null);

  return (
    <div className="header">
      <HeaderTopheader
        isAdmin={isAdmin}
        onToggleTheme={onToggleTheme}
        currentTheme={currentTheme}
        onToggleAdmin={onToggleAdmin}
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
