import React, { useState } from "react";

import { FiltersManufacturer } from "./-Manufacturer/Filters-Manufacturer";
import { FiltersFamily } from "./-Family/Filters-Family";

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
