import { Layout } from "@consta/uikit/Layout";
import { HeaderPro } from "../header/Header";
import { Content } from "../content/Content";
import { useState } from "react";
import { HeaderUser } from "../header/Header";
import { HeaderNoSearch } from "../header/Header";
import { Filters } from "../filters/Filters";
import "./MainPage.css";

export function MainPage({ onToggleTheme, currentTheme }) {
  const [headerType, setHeaderType] = useState("HeaderPro");

  return (
    <Layout direction="column" style={{ height: "100vh" }}>
      <Layout>
        {/* {headerType === "HeaderPro" && <HeaderPro />} */}
        {headerType === "HeaderPro" && (
          <HeaderPro
            onToggleTheme={onToggleTheme}
            currentTheme={currentTheme}
          />
        )}
        {headerType === "HeaderUser" && <HeaderUser />}
        {headerType === "HeaderNoSearch" && <HeaderNoSearch />}
      </Layout>

      <Layout direction="row" className="FiltersAndContent">
        <Filters />
        <Content />
      </Layout>
    </Layout>
  );
}
