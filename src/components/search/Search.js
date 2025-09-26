import React, { useState } from "react";

import { AutoComplete } from "@consta/uikit/AutoComplete";

const basicItems = ["Первый", "Второй", "Третий", "Четвертый", "Пятый"];

export const AutoCompleteExampleItems = () => {
  const [value, setValue] = useState(null);
  return (
    <AutoComplete
      type="text"
      placeholder="Введите значение"
      value={value}
      items={basicItems}
      getItemKey={(item) => item}
      getItemLabel={(item) => item}
      onChange={setValue}
      size="s"
    />
  );
};
