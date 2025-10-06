import { Layout } from "@consta/uikit/Layout";
import { Navbar } from "@consta/header/Navbar";
import { Text } from "@consta/uikit/Text";
import "./filters__family.css";
import "./_disabled/filters__family_disabled.css";
import React from "react";

export const FiltersFamily = ({ isDisabled = true }) => {
  const families = [
    {
      label: "1-е поколение",
      groupId: "families",
      subMenu: [
        { label: "Intel 4004", value: "intel_4004" },
        { label: "Intel 8008", value: "intel_8008" },
        { label: "Intel 8080", value: "intel_8080" },
        { label: "Motorola 6800", value: "motorola_6800" },
      ],
    },
    {
      label: "2-е поколение",
      groupId: "families",
      subMenu: [
        { label: "Intel 8086", value: "intel_8086" },
        { label: "Intel 8088", value: "intel_8088" },
        { label: "Motorola 68000", value: "motorola_68000" },
        { label: "Zilog Z80", value: "zilog_z80" },
      ],
    },
    {
      label: "3-е поколение",
      groupId: "families",
      subMenu: [
        { label: "Intel 80286", value: "intel_80286" },
        { label: "Motorola 68020", value: "motorola_68020" },
        { label: "ARM2", value: "arm2" },
        { label: "SPARC", value: "sparc" },
      ],
    },
    {
      label: "4-е поколение",
      groupId: "families",
      subMenu: [
        { label: "Intel 80386", value: "intel_80386" },
        { label: "Motorola 68030", value: "motorola_68030" },
        { label: "ARM3", value: "arm3" },
        { label: "MIPS R2000", value: "mips_r2000" },
      ],
    },
    {
      label: "5-е поколение",
      groupId: "families",
      subMenu: [
        { label: "Intel 80486", value: "intel_80486" },
        { label: "Motorola 68040", value: "motorola_68040" },
        { label: "ARM6", value: "arm6" },
        { label: "PowerPC 601", value: "powerpc_601" },
      ],
    },
    {
      label: "Современные",
      groupId: "families",
      subMenu: [
        { label: "Intel Core i3", value: "intel_core_i3" },
        { label: "Intel Core i5", value: "intel_core_i5" },
        { label: "Intel Core i7", value: "intel_core_i7" },
        { label: "AMD Ryzen 3", value: "amd_ryzen3" },
        { label: "AMD Ryzen 5", value: "amd_ryzen5" },
        { label: "AMD Ryzen 7", value: "amd_ryzen7" },
        { label: "Apple M1", value: "apple_m1" },
        { label: "Apple M2", value: "apple_m2" },
      ],
    },
  ];

  const getItemLabel = (item) => item.label;
  const getItemSubMenu = (item) => item.subMenu;
  const onItemClick = (item) => {
    if (item.value) {
      console.log("Выбрано семейство:", item.label);
    }
  };

  return (
    <Layout
      flex={1}
      className={`filters__family ${
        isDisabled ? "filters__family_disabled" : ""
      }`}
    >
      <div className="filterFamilyHeader">
        <Text size="xs" view="secondary">
          СЕМЕЙСТВА
        </Text>
      </div>

      <div className="filterFamilyContent">
        <Navbar
          items={families}
          groups={[]}
          getItemLabel={getItemLabel}
          getItemSubMenu={getItemSubMenu}
          onItemClick={onItemClick}
          size="s"
          form="brick"
        />
      </div>
    </Layout>
  );
};
