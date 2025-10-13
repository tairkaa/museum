import { Layout } from "@consta/uikit/Layout";
import { Filters } from "../Filters/Filters";
import { Content } from "../Content/Content";
import "./MemTab.css";

export const MemTab = () => {
  return (
    <Layout direction="row" className="mem-tab">
      <Filters />
      <Content />
    </Layout>
  );
};
