import { Layout } from "@consta/header/Layout";
import { Button } from "@consta/uikit/Button";
import { AutoCompleteExampleItems } from "../search/Search.js";
import "./Header.css";
import { Text } from "@consta/uikit/Text";
import { Picture } from "@consta/uikit/Picture";

import React, { useState } from "react";
import { Tabs } from "@consta/uikit/Tabs";
import { IconSun } from "@consta/icons/IconSun";

const items = ["Процессоры", "Материнские платы", "Устройства хранения"];

const getItemLabel = (label) => label;

export const TabsExample = () => {
  const [value, setValue] = useState(items[0]);
  return (
    <Tabs
      value={value}
      onChange={setValue}
      items={items}
      getItemLabel={getItemLabel}
      view="primary"
      size="s"
    />
  );
};

export function HeaderPro({ onToggleTheme, currentTheme }) {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);

  return (
    <div style={{ width: "100vw" }}>
      <div
        style={{
          backgroundColor: "var(--color-bg-normal)",
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Picture
          src="/auteam-logo.svg"
          alt="auteam-logo"
          style={{ width: "20px", height: "20px" }}
        />
        <Picture
          src="/gubkin-logo.svg"
          alt="auteam-logo"
          style={{ width: "20px", height: "20px" }}
        />
        <Text size="xs" view="primary" style={{ color: "white" }}>
          Музей компьютеров и вычислительной техники РГУ нефти и газа (НИУ)
          имени И.М. Губкина | Admin |
        </Text>
        <Text
          size="xs"
          view="primary"
          style={{
            color: "white",
            fontFamily: "monospace",
            minWidth: "80px",
            textAlign: "left",
          }}
        >
          {now.toLocaleTimeString()}
        </Text>
        <Button
          size="s"
          view="clear"
          onlyIcon="true"
          iconRight={IconSun}
          form="brick"
          label={`Тема: ${currentTheme}`}
          onClick={onToggleTheme}
        />
      </div>

      <Layout
        rowCenter={{
          left: <TabsExample />,
          center: <SearchGroup />,
          right: <RightGroupPro />,
        }}
      />
    </div>
  );
}

export const HeaderUser = () => (
  <Layout
    rowTop={{
      center: "Музей процессоров",
    }}
    rowCenter={{
      left: <ButtonGroup />,
      center: <SearchGroup />,
      right: <RightGroupUser />,
    }}
  />
);

export const HeaderNoSearch = () => (
  <Layout
    rowTop={{
      center: "Музей процессоров",
    }}
    rowCenter={{
      left: <ButtonGroup />,
      right: <RightGroupPro />,
    }}
  />
);

const ButtonGroup = () => (
  <div style={{ display: "flex", gap: "10px" }}>
    <Button label="Процессоры" view="ghost" form="brick" />
    <Button label="Материнские платы" view="ghost" form="brick" />
    <Button label="Хранилки" view="ghost" form="brick" />
  </div>
);

const SearchGroup = () => (
  <div style={{ display: "flex", gap: "5px" }}>
    <AutoCompleteExampleItems value="Поиск" />
    <Button label="Найти" form="default" size="s" view="ghost" form="brick" />
  </div>
);

const RightGroupUser = () => (
  <div style={{ display: "flex", gap: "10px" }}>
    <Button label="" view="clear" form="brick" />
  </div>
);

const RightGroupPro = () => (
  <div style={{ display: "flex", gap: "10px" }}>
    <Button label="Импорт CSV" view="ghost" size="s" form="brick" />
    <Button label="Импорт фото" view="ghost" size="s" form="brick" />
    <Button label="Скачать таблицу" view="ghost" size="s" form="brick" />
    <Button label="Выйти" view="ghost" size="s" form="brick" />
  </div>
);
