import { useState } from "react";
import { Navbar } from "@consta/header/Navbar";

export const FilterManufacturer = () => {
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);

  const manufacturers = [
    { label: "Intel", value: "intel", groupId: "manufacturers" },
    { label: "AMD", value: "amd", groupId: "manufacturers" },
    { label: "ARM", value: "arm", groupId: "manufacturers" },
    { label: "IBM", value: "ibm", groupId: "manufacturers" },
    { label: "Motorola", value: "motorola", groupId: "manufacturers" },
  ];

  const groups = [{ id: "manufacturers", label: "Производители" }];

  const getItemLabel = (item) => item.label;
  const getItemGroupId = (item) => item.groupId;
  const getGroupKey = (group) => group.id;
  const getGroupLabel = (group) => group.label;
  const onItemClick = (item) => {
    setSelectedManufacturer(item);
    console.log("Выбран производитель:", item.label);
  };

  return (
    <div style={{ width: "100%" }}>
      <Navbar
        items={manufacturers}
        groups={groups}
        getItemLabel={getItemLabel}
        getItemGroupId={getItemGroupId}
        getGroupKey={getGroupKey}
        getGroupLabel={getGroupLabel}
        onItemClick={onItemClick}
        size="s"
        form="default"
      />
    </div>
  );
};
