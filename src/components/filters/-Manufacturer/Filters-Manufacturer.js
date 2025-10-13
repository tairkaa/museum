import { Layout } from "@consta/uikit/Layout";
import { Navbar } from "@consta/header/Navbar";
import { Text } from "@consta/uikit/Text";
import "./Filters-Manufacturer.css";

export const FiltersManufacturer = ({ onManufacturerChange }) => {
  const manufacturers = [
    { label: "Intel", value: "intel", groupId: "manufacturers" },
    { label: "AMD", value: "amd", groupId: "manufacturers" },
    { label: "ARM", value: "arm", groupId: "manufacturers" },
    { label: "IBM", value: "ibm", groupId: "manufacturers" },
    { label: "Motorola", value: "motorola", groupId: "manufacturers" },
  ];

  const getItemLabel = (item) => item.label;

  const onItemClick = (item) => {
    onManufacturerChange(item);
    console.log("Выбран производитель:", item.label);
  };

  return (
    <Layout flex={1} className="filters__manufacturer">
      <div className="filterManufacturerHeader">
        <Text size="xs" view="secondary">
          ПРОИЗВОДИТЕЛИ
        </Text>
      </div>

      <div className="filterManufacturerContent">
        <Navbar
          items={manufacturers}
          groups={[]}
          getItemLabel={getItemLabel}
          onItemClick={onItemClick}
          size="s"
          form="brick"
        />
      </div>
    </Layout>
  );
};
