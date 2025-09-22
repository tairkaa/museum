import { Layout } from "@consta/header/Layout";
import { Button } from "@consta/uikit/Button";
import { AutoCompleteExampleItems } from "../search/Search.js";

export const HeaderPro = () => (
  <Layout
    rowTop={{
      center: "Музей процессоров",
    }}
    rowCenter={{
      left: <ButtonGroup />,
      center: <SearchGroup />,
      right: <RightGroup />,
    }}
  />
);

const ButtonGroup = () => (
  <div style={{ display: "flex", gap: "10px" }}>
    <Button label="Процессоры" view="clear" />
    <Button label="Материнские платы" view="clear" />
    <Button label="Хранилки" view="clear" />
  </div>
);

const SearchGroup = () => (
  <div style={{ display: "flex" }}>
    <AutoCompleteExampleItems value="Поиск" />
    <Button label="Найти" form="default" />
  </div>
);

const RightGroup = () => (
  <div style={{ display: "flex", gap: "10px" }}>
    <Button label="Импорт CSV" view="clear" />
    <Button label="Импорт фото" view="clear" />
    <Button label="Скачать таблицу" view="clear" />
    <Button label="Войти" view="clear" />
  </div>
);
