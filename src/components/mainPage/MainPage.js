import { Layout } from "@consta/uikit/Layout";
import { HeaderPro } from "../header/Header";
import { FilterManufacturer } from "../filterManufacturer/FilterManufacturer";
import { FilterFamily } from "../filterFamily/FilterFamily";
import { Content } from "../content/Content";
import { useState } from "react";
import { HeaderUser } from "../header/Header";
import { HeaderNoSearch } from "../header/Header";
import "./MainPage.css";

export function MainPage() {
  const [headerType, setHeaderType] = useState("HeaderPro");

  return (
    <Layout direction="column" style={{ height: "100vh" }}>
      <Layout style={{ width: "100vw" }}>
        {headerType === "HeaderPro" && <HeaderPro />}
        {headerType === "HeaderUser" && <HeaderUser />}
        {headerType === "HeaderNoSearch" && <HeaderNoSearch />}
      </Layout>

      <Layout direction="row" style={{ flex: 1, overflow: "hidden" }}>
        <Layout flex={1} className="FilterManufacturerContainer">
          <FilterManufacturer />
        </Layout>
        <Layout flex={1} className="FilterFamilyContainer">
          <FilterFamily />
        </Layout>
        <Layout flex={4} style={{ overflow: "auto" }}>
          <Content />
        </Layout>
      </Layout>
    </Layout>
  );
}
