import React from "react";
import { Stats } from "@consta/widgets/Stats";
import "./content-header__statistics.css";

export const ContentHeaderStatistics = () => {
  return (
    <div className="content-header__statistics">
      <div className="content-header__statistics-item">
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

      <div className="content-header__statistics-item">
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

      <div className="content-header__statistics-item">
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
