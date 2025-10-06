import { Layout } from "@consta/uikit/Layout";
import { Filters } from "../filters/filters";
import { Content } from "../content/content";
import "./mb-tab.css";

export const MbTab = () => {
  return (
    <Layout direction="row" className="mb-tab">
      <Filters />
      <Content />
    </Layout>
  );
};
