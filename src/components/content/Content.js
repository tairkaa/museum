import { Layout } from "@consta/uikit/Layout";
import { Button } from "@consta/uikit/Button";
import { ButtonPalette } from "../buttons/ButtonPalette";
import { ManufacturerDescription } from "../manufacturerDescription/ManufacturerDescription";
import { CpuCard } from "../cpuCard/CpuCard";
import "./Content.css";

export const Content = () => {
  let guid = "5816B197";

  return (
    <Layout className="MainContent">
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
          <ManufacturerDescription />
          <div style={{ display: "flex", gap: "10px" }}>
            <ButtonPalette />
            <Button
              size="s"
              label="Показать отсутствующие"
              width="default"
              view="secondary"
              form="brick"
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
          <CpuCard guid={guid} />
          <CpuCard guid={guid} />
          <CpuCard guid={guid} />
        </Layout>
      </Layout>
    </Layout>
  );
};
