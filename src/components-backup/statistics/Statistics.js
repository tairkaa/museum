import React from "react";
import { Stats } from "@consta/widgets/Stats";
import "./Statistics.css";

export const Statistics = () => {
  return (
    <div className="statisticsContainer">
      <div className="statisticsItem">
        <Stats
          value={1247}
          title="Всего процессоров"
          unit="шт"
          rate="+5%"
          iconArrowRate
          status="success"
          layout="default"
          size="xs"
        />
      </div>

      <div className="statisticsItem">
        <Stats
          value={1156}
          title="Рабочих"
          unit="шт"
          rate="+3%"
          iconArrowRate
          status="success"
          layout="default"
          size="xs"
        />
      </div>

      <div className="statisticsItem">
        <Stats
          value={91}
          title="Дублей"
          unit="шт"
          rate="-2%"
          iconArrowRate
          status="warning"
          layout="default"
          size="xs"
        />
      </div>
    </div>
  );
};
