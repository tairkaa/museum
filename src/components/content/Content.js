import { Layout } from "@consta/uikit/Layout";
import { ContentHeader } from "../content-header/content-header";
import { CardComponent } from "../card/card";
import "./content.css";
import "./__cards/content__cards.css";

export const Content = () => {
  let guid = "5816B197";

  return (
    <Layout direction="column" className="content">
      <ContentHeader />
      <Layout className="content__cards">
        <CardComponent guid={guid} />
        <CardComponent guid={guid} />
        <CardComponent guid={guid} />
      </Layout>
    </Layout>
  );
};
