import React, { useState } from "react";

import { FiltersManufacturer } from "./__manufacturer/filters__manufacturer";
import { FiltersFamily } from "./__family/filters__family";

export const Filters = () => {
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);

  const handleManufacturerChange = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
  };

  return (
    <>
      <FiltersManufacturer onManufacturerChange={handleManufacturerChange} />
      <FiltersFamily isDisabled={!selectedManufacturer} />
    </>
  );
};
