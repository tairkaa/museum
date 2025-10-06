import { Text } from "@consta/uikit/Text";
import { Statistics } from "../statistics/Statistics";

export const ManufacturerDescription = () => {
  let description =
    "Intel является одним из крупнейших мировых производителей полупроводниковых микросхем и одним из главных лидеров в области разработки процессоров для персональных компьютеров, ноутбуков и серверов. Корпорация была основана в 1968 году в США и внесла огромный вклад в развитие индустрии микропроцессоров.";
  return (
    <>
      <Text view="primary" size="3xl" weight="bold">
        Intel
      </Text>
      <Text view="secondary" size="m" lineHeight="m">
        {description}
      </Text>
      <Statistics />
    </>
  );
};
