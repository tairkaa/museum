import { Layout } from "@consta/uikit/Layout";
import { FilterManufacturer } from "../filterManufacturer/FilterManufacturer";
import { FilterFamily } from "../filterFamily/FilterFamily";

import "./Filters.css";

export const Filters = () => {
  return (
    <>
      <Layout flex={1} className="FilterManufacturerContainer">
        <FilterManufacturer />
      </Layout>
      <Layout flex={1} className="FilterFamilyContainer">
        <FilterFamily />
      </Layout>
    </>
  );
};
