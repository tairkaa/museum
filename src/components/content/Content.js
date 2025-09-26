import { Layout } from "@consta/uikit/Layout";
import { Button } from "@consta/uikit/Button";
import { ButtonPalette } from "../buttons/ButtonPalette";
import { ManufacturerDescription } from "../manufacturerDescription/ManufacturerDescription";
import { CpuCard } from "../cpuCard/CpuCard";

export const Content = () => {
  let guid = "5816B197";
  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Layout direction="column" style={{ padding: "20px" }}>
      <Layout
        flex={1}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
        }}
      >
        <ManufacturerDescription manufacturer="Intel" />
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

      <Layout
        flex={6}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
        }}
      >
        <CpuCard />
        <CpuCard />
        <CpuCard />
      </Layout>
    </Layout>
  );
};
