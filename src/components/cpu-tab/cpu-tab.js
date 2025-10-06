import { Layout } from "@consta/uikit/Layout";
import { Filters } from "../filters/filters";
import { Content } from "../content/content";
import "./cpu-tab.css";

export const CpuTab = () => {
  return (
    <Layout direction="row" className="cpu-tab">
      <Filters />
      <Content />
    </Layout>
  );
};
