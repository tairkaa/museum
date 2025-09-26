import { Layout } from "@consta/header/Layout";
import { Button } from "@consta/uikit/Button";
import { AutoCompleteExampleItems } from "../search/Search.js";
import { useState } from "react";
import "./Header.css";
import { Text } from "@consta/uikit/Text";
import { Picture } from "@consta/uikit/Picture";

export function HeaderPro() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);

  return (
    <Layout
      rowTop={{
        center: (
          <HeaderTop something={`| Admin | ${now.toLocaleTimeString()}`} />
        ),
      }}
      rowCenter={{
        left: <ButtonGroup />,
        center: <SearchGroup />,
        right: <RightGroupPro />,
      }}
    />
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
      center: <HeaderTop />,
    }}
    rowCenter={{
      left: <ButtonGroup />,
      right: <RightGroupPro />,
    }}
  />
);

const ButtonGroup = () => (
  <div style={{ display: "flex", gap: "10px" }}>
    <Button label="Процессоры" view="ghost" />
    <Button label="Материнские платы" view="ghost" />
    <Button label="Хранилки" view="ghost" />
  </div>
);

const SearchGroup = () => (
  <div style={{ display: "flex", gap: "5px" }}>
    <AutoCompleteExampleItems value="Поиск" />
    <Button label="Найти" form="default" />
  </div>
);

const RightGroupUser = () => (
  <div style={{ display: "flex", gap: "10px" }}>
    <Button label="" view="clear" />
  </div>
);

const RightGroupPro = () => (
  <div style={{ display: "flex", gap: "10px" }}>
    <Button label="Импорт CSV" view="clear" />
    <Button label="Импорт фото" view="clear" />
    <Button label="Скачать таблицу" view="clear" />
    <Button label="Выйти" view="clear" />
  </div>
);

const HeaderTop = (props) => (
  <div
    style={{
      display: "flex",
      gap: "10px",
      alignItems: "center",
      width: "100%",
      height: "100%",
      justifyContent: "center",
    }}
  >
    <Picture
      src="/auteam-logo-color.svg"
      alt="auteam-logo"
      style={{ width: "20px", height: "20px" }}
    />
    <Text size="xs" view="primary">
      Музей процессоров {props.something}
    </Text>
  </div>
);
