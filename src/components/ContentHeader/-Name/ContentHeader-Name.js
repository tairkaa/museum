import { Text } from "@consta/uikit/Text";
import "./ContentHeader-Name.css";

export const ContentHeaderName = ({ manufacturerName }) => {
  return (
    <div className="content-header__name">
      <Text view="primary" size="3xl" weight="bold">
        {manufacturerName}
      </Text>
    </div>
  );
};
