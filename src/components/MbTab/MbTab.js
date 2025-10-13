import { Layout } from "@consta/uikit/Layout";
import { Filters } from "../Filters/Filters";
import { Content } from "../Content/Content";
import "./MbTab.css";

export const MbTab = () => {
  return (
    <Layout direction="row" className="mb-tab">
      <Filters />
      <Content />
    </Layout>
  );
};
