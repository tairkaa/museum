import { Layout } from "@consta/uikit/Layout";
import { Filters } from "../Filters/Filters";
import { Content } from "../Content/Content";
import "./CpuTab.css";

export const CpuTab = () => {
  return (
    <Layout direction="row" className="cpu-tab">
      <Filters />
      <Content />
    </Layout>
  );
};
