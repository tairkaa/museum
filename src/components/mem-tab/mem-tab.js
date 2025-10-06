import { Layout } from "@consta/uikit/Layout";
import { Filters } from "../filters/filters";
import { Content } from "../content/content";
import "./mem-tab.css";

export const MemTab = () => {
  return (
    <Layout direction="row" className="mem-tab">
      <Filters />
      <Content />
    </Layout>
  );
};
