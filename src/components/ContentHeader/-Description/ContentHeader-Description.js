import { Text } from "@consta/uikit/Text";
import "./ContentHeader-Description.css";

export const ContentHeaderDescription = ({ description }) => {
  return (
    <div className="content-header__description">
      <Text view="secondary" size="m" lineHeight="m">
        {description}
      </Text>
    </div>
  );
};
