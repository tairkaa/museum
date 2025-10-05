import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import { Picture } from "@consta/uikit/Picture";
import { Badge } from "@consta/uikit/Badge";
import { Layout } from "@consta/uikit/Layout";
import "./cpuCard.css";

export const CpuCard = ({ guid }) => {
  const cpuData = {
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
  };

  return (
    <Card verticalSpace="0" horizontalSpace="0" form="brick">
      <CpuCardHeader
        name={cpuData.name}
        manufacturer={cpuData.manufacturer}
        status={cpuData.status}
      />

      <Layout direction="row" style={{ gap: "20px", padding: "16px" }}>
        <Layout flex={1} style={{ display: "flex", flexDirection: "column" }}>
          <PhotoBlock guid={guid} />
        </Layout>

        <Layout flex={1}>
          <DescriptionTable cpuData={cpuData} />
        </Layout>
      </Layout>
    </Card>
  );
};

const CpuCardHeader = ({ name, manufacturer, status }) => (
  <div className="cpuCardHeader">
    <Badge
      label="Работает"
      status={status}
      size="s"
      view="filled"
      form="brick"
    />
    <Text size="l" weight="bold" view="primary">
      {name}
    </Text>
    <div style={{ flex: 1 }} />
    <Text size="s" view="secondary">
      Палетка: IP_001
    </Text>
  </div>
);

const PhotoBlock = ({ guid }) => (
  <div className="photoBlock">
    <Layout flex={1}>
      <MainPictures guid={guid} />
    </Layout>

    <Layout>
      <PreviewPictures guid={guid} />
    </Layout>
  </div>
);

const MainPictures = ({ guid }) => (
  <div className="mainPictures">
    <Layout flex={1}>
      <Picture
        src={`/images/${guid}/big0.jpg`}
        alt="Основное фото процессора"
        className="mainPicture"
      />
    </Layout>
    <Layout flex={1}>
      <Picture
        src={`/images/${guid}/big1.jpg`}
        alt="Дополнительное фото процессора"
        className="mainPicture"
      />
    </Layout>
  </div>
);

const PreviewPictures = ({ guid }) => (
  <div className="previewPictures">
    <Picture
      src={`/images/${guid}/test0.jpg`}
      alt="Превью 1"
      className="previewPicture"
    />
    <Picture
      src={`/images/${guid}/test1.jpg`}
      alt="Превью 2"
      className="previewPicture"
    />
  </div>
);

const DescriptionTable = ({ cpuData }) => (
  <div className="descriptionTable">
    <TableRow label="GUID" value={cpuData.guid} />
    <TableRow label="Spec" value={cpuData.spec} />
    <TableRow label="Страна" value={cpuData.country} />
    <TableRow label="Год" value={cpuData.year} />
    <TableRow label="Семейство" value={cpuData.family} />
    <TableRow label="Сокет" value={cpuData.socket} />
    <TableRow label="Ядро" value={cpuData.core} />
    <TableRow label="Цена" value={cpuData.price} />
    <TableRow label="Описание" value={cpuData.description} />
  </div>
);

const TableRow = ({ label, value }) => (
  <div className="tableRow">
    <Text size="s" view="secondary" className="tableRowLabel">
      {label}:
    </Text>
    <Text size="s" view="primary" className="tableRowValue">
      {value}
    </Text>
  </div>
);
