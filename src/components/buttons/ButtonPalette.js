import React, { useState } from "react";
import { Combobox } from "@consta/uikit/Combobox";
import "./ButtonPalette.css";

export const ButtonPalette = () => {
  const items = [
    { label: "Первый", id: 1 },
    { label: "Второй", id: 2 },
    { label: "Третий", id: 3 },
  ];

  const [value, setValue] = useState(null);

  return (
    <Combobox
      className="Combobox"
      placeholder="Выберите палетку"
      items={items}
      value={value}
      onChange={setValue}
      size="s"
      form="brick"
    />
  );
};
