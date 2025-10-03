import { useState } from "react";
import { Navbar } from "@consta/header/Navbar";
import { Text } from "@consta/uikit/Text";
import "./FilterManufacturer.css";

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
    <div className="mainFilterManufacturerBlock">
      <div className="manufacturerFilterHeader">
        <Text size="xs" view="secondary">
          ПРОИЗВОДИТЕЛИ
        </Text>
      </div>

      <div className="manufacturerFilterContent">
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
