import { Badge } from "@consta/uikit/Badge";
import { Text } from "@consta/uikit/Text";
import "./card-header.css";
import "./__work-status/card-header__work-status.css";
import "./__name/card-header__name.css";
import "./__palette/card-header__palette.css";
import "./__work-status/_works/card-header__work-status_works.css";
import "./__palette/_disabled/card-header__palette_disabled.css";

export const CardHeader = ({
  name,
  manufacturer,
  status,
  hasPalette,
  paletteDisabled,
}) => {
  const isWorking = status === "success";

  return (
    <div className="card-header">
      <div
        className={`card-header__work-status${
          isWorking ? " card-header__work-status_works" : ""
        }`}
      >
        <Badge
          label={isWorking ? "Работает" : "Не работает"}
          status={status}
          size="s"
          view="filled"
          form="brick"
        />
      </div>

      <div className="card-header__name">
        <Text size="l" weight="bold" view="primary">
          {name}
        </Text>
      </div>

      <div style={{ flex: 1 }} />

      {hasPalette && (
        <div
          className={`card-header__palette${
            paletteDisabled ? " card-header__palette_disabled" : ""
          }`}
        >
          <Text size="s" view="secondary">
            Палетка: IP_001
          </Text>
        </div>
      )}
    </div>
  );
};
