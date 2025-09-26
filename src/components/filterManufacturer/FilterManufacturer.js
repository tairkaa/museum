import { useState } from "react";
import { Navbar } from "@consta/header/Navbar";
import { Text } from "@consta/uikit/Text";

export const FilterManufacturer = () => {
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);

  const manufacturers = [
    { label: "Intel", value: "intel", groupId: "manufacturers" },
    { label: "AMD", value: "amd", groupId: "manufacturers" },
    { label: "ARM", value: "arm", groupId: "manufacturers" },
    { label: "IBM", value: "ibm", groupId: "manufacturers" },
    { label: "Motorola", value: "motorola", groupId: "manufacturers" },
  ];

  const getItemLabel = (item) => item.label;

  const onItemClick = (item) => {
    setSelectedManufacturer(item);
    console.log("Выбран производитель:", item.label);
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "10px",
          backgroundColor: "var(--color-bg-system)",
          borderBottom: "1px solid var(--color-bg-border)",
          flexShrink: 0,
        }}
      >
        <Text
          size="xs"
          view="primary"
          style={{
            color: "var(--color-control-typo-clear)",
          }}
        >
          ПРОИЗВОДИТЕЛИ
        </Text>
      </div>

      <div
        style={{
          flex: 1,
          overflow: "auto",
          padding: "10px",
        }}
      >
        <Navbar
          items={manufacturers}
          groups={[]}
          getItemLabel={getItemLabel}
          onItemClick={onItemClick}
          size="s"
          form="brick"
        />
      </div>
    </div>
  );
};
