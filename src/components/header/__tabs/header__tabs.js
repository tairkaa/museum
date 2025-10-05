import React from "react";
import { Tabs } from "@consta/uikit/Tabs";

import "./header__tabs.css";

const TAB_ITEMS = ["Процессоры", "Материнские платы", "Устройства хранения"];

export function HeaderTabs({ onTabChange, activeTab }) {
  return (
    <Tabs
      className="header__tabs"
      value={activeTab}
      onChange={onTabChange}
      items={TAB_ITEMS}
      getItemLabel={(label) => label}
      view="primary"
      size="s"
    />
  );
}
