import { Layout } from "@consta/uikit/Layout";
import { Button } from "@consta/uikit/Button";
import { Text } from "@consta/uikit/Text";
import { ButtonPalette } from "../buttons/ButtonPalette";

export const CardsListAndDescription = () => (
  <Layout direction="column">
    <Layout
      flex={1}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
      }}
    >
      <Text view="primary" size="3xl" weight="bold">
        Intel
      </Text>
      <Text view="secondary" size="m" lineHeight="m">
        Intel is a company that makes chips for computers.
      </Text>
      <div style={{ display: "flex", gap: "10px" }}>
        <ButtonPalette />
        <Button
          size="s"
          label="Показать отсутствующие"
          width="default"
          view="secondary"
        />
      </div>
    </Layout>

    <Layout flex={1}>
      <Layout direction="column">
        <Layout flex={1}>
          <h1>Card 1</h1>
        </Layout>
        <Layout flex={1}>
          <h1>Card 2</h1>
        </Layout>
      </Layout>
    </Layout>
  </Layout>
);
