import { Card } from "@consta/uikit/Card";
import { Layout } from "@consta/uikit/Layout";
import { CardHeader } from "../CardHeader/CardHeader";
import { CardPictures } from "../CardPictures/CardPictures";
import { CardDescription } from "../CardDescription/CardDescription";
import "./Card.css";
import "./-Content/Card-Content.css";

export const CardComponent = ({ guid, cpuData }) => {
  const defaultCpuData = {
    name: "Intel Core i7-12700K",
    manufacturer: "Intel",
    status: "success",
    guid: "5816B197",
    spec: "SX995",
    country: "MALAYSIA",
    year: "2005",
    family: "Core i7",
    socket: "Socket 7",
    core: "Northwood",
    price: "400",
    description: "Высокопроизводительный процессор для настольных ПК",
    ...cpuData,
  };

  return (
    <Card form="brick" className="card">
      <CardHeader
        name={defaultCpuData.name}
        manufacturer={defaultCpuData.manufacturer}
        status={defaultCpuData.status}
        hasPalette={true}
        paletteDisabled={false}
      />

      <Layout direction="row" className="card__content">
        <Layout flex={1}>
          <CardPictures guid={guid || defaultCpuData.guid} />
        </Layout>
        <Layout flex={1}>
          <CardDescription cpuData={defaultCpuData} />
        </Layout>
      </Layout>
    </Card>
  );
};
