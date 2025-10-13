import { Text } from "@consta/uikit/Text";
import "./CardDescription.css";

export const CardDescription = ({ cpuData }) => {
  return (
    <div className="card-description">
      <div className="card-description__row">
        <Text size="s" view="secondary" className="card-description__label">
          GUID:
        </Text>
        <Text size="s" view="primary" className="card-description__value">
          {cpuData.guid}
        </Text>
      </div>
      <div className="card-description__row">
        <Text size="s" view="secondary" className="card-description__label">
          Spec:
        </Text>
        <Text size="s" view="primary" className="card-description__value">
          {cpuData.spec}
        </Text>
      </div>
      <div className="card-description__row">
        <Text size="s" view="secondary" className="card-description__label">
          Страна:
        </Text>
        <Text size="s" view="primary" className="card-description__value">
          {cpuData.country}
        </Text>
      </div>
      <div className="card-description__row">
        <Text size="s" view="secondary" className="card-description__label">
          Год:
        </Text>
        <Text size="s" view="primary" className="card-description__value">
          {cpuData.year}
        </Text>
      </div>
      <div className="card-description__row">
        <Text size="s" view="secondary" className="card-description__label">
          Семейство:
        </Text>
        <Text size="s" view="primary" className="card-description__value">
          {cpuData.family}
        </Text>
      </div>
      <div className="card-description__row">
        <Text size="s" view="secondary" className="card-description__label">
          Сокет:
        </Text>
        <Text size="s" view="primary" className="card-description__value">
          {cpuData.socket}
        </Text>
      </div>
      <div className="card-description__row">
        <Text size="s" view="secondary" className="card-description__label">
          Ядро:
        </Text>
        <Text size="s" view="primary" className="card-description__value">
          {cpuData.core}
        </Text>
      </div>
      <div className="card-description__row">
        <Text size="s" view="secondary" className="card-description__label">
          Цена:
        </Text>
        <Text size="s" view="primary" className="card-description__value">
          {cpuData.price}
        </Text>
      </div>
      <div className="card-description__row">
        <Text size="s" view="secondary" className="card-description__label">
          Описание:
        </Text>
        <Text size="s" view="primary" className="card-description__value">
          {cpuData.description}
        </Text>
      </div>
    </div>
  );
};
