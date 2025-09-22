import { useState, useRef } from "react";
import { Button } from "@consta/uikit/Button";
import { ContextMenu } from "@consta/uikit/ContextMenu";
import { IconList } from "@consta/icons/IconList";

export const ButtonPalette = () => {
  const items = [
    { label: "Пункт 1" },
    { label: "Пункт 2" },
    { label: "Пункт 3" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  return (
    <>
      <Button
        size="s"
        ref={ref}
        label="Выбрать палетку"
        iconLeft={IconList}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ContextMenu
        isOpen={isOpen}
        items={items}
        anchorRef={ref}
        onClickOutside={() => setIsOpen(false)}
        direction="downStartLeft"
      />
    </>
  );
};
