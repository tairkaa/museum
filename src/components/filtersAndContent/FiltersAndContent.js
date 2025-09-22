import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import { HeaderPro } from "../header/Header";
import { FilterManufacturer } from "../filterManufacturer/FilterManufacturer";
import { FilterFamily } from "../filterFamily/FilterFamily";
import { CardsListAndDescription } from "../cardsListAndDescription/CardsListAndDescription";

export const FiltersAndContent = () => (
  <Layout direction="column">
    <Layout flex={1}>
      <HeaderPro />
    </Layout>
    <Layout flex={1}>
      <Layout direction="row">
        <Layout
          flex={1}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
          }}
        >
          <FilterManufacturer />
        </Layout>
        <Layout
          flex={1}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
          }}
        >
          <FilterFamily />
        </Layout>
        <Layout flex={4}>
          <CardsListAndDescription />
        </Layout>
      </Layout>
    </Layout>
  </Layout>
);
