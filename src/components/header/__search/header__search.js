import React from "react";
import { Button } from "@consta/uikit/Button";
import { AutoComplete } from "@consta/uikit/AutoComplete";

import "./header__search.css";

const SEARCH_ITEMS = ["Первый", "Второй", "Третий", "Четвертый", "Пятый"];

export function HeaderSearch({ value, onChange }) {
  return (
    <div className="header__search">
      <AutoComplete
        type="text"
        form="brick"
        placeholder="Введите значение"
        value={value}
        items={SEARCH_ITEMS}
        getItemKey={(item) => item}
        getItemLabel={(item) => item}
        onChange={onChange}
        size="s"
      />
      <Button label="Найти" size="s" view="ghost" form="brick" />
    </div>
  );
}
