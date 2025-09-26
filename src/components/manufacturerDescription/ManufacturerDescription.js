import { Text } from "@consta/uikit/Text";

export const ManufacturerDescription = () => {
  let description = "Intel is a company that makes chips for computers.";
  return (
    <>
      <Text view="primary" size="3xl" weight="bold">
        Intel
      </Text>
      <Text view="secondary" size="m" lineHeight="m">
        {description}
      </Text>
    </>
  );
};
