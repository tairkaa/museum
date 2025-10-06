import React, { useState } from "react";
import { Combobox } from "@consta/uikit/Combobox";
import { Button } from "@consta/uikit/Button";
import "./content-header__filters.css";

export const ContentHeaderFilters = () => {
  const items = [
    { label: "Первый", id: 1 },
    { label: "Второй", id: 2 },
    { label: "Третий", id: 3 },
  ];

  const [value, setValue] = useState(null);

  return (
    <div className="content-header__filters">
      <Combobox
        className="content-header__filters-combobox"
        placeholder="Выберите палетку"
        items={items}
        value={value}
        onChange={setValue}
        size="s"
        form="brick"
      />
      <Button
        size="s"
        label="Показать отсутствующие"
        width="default"
        view="secondary"
        form="brick"
      />
    </div>
  );
};
