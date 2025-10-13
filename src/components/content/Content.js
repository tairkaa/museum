import { Layout } from "@consta/uikit/Layout";
import { ContentHeader } from "../ContentHeader/ContentHeader";
import { CardComponent } from "../Card/Card";
import "./Content.css";
import "./-Cards/Content-Cards.css";

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
