import React from "react";
import { Button } from "@consta/uikit/Button";
import { Text } from "@consta/uikit/Text";
import { IconSun } from "@consta/icons/IconSun";

import { ReactComponent as AuteamLogo } from "../auteam-logo.svg";
import { ReactComponent as GubkinLogo } from "../gubkin-logo.svg";

import "./header__topheader.css";
import "./_admin/header__topheader_admin.css";
import "./_user/header__topheader_user.css";

export function HeaderTopheader({
  isAdmin,
  onToggleTheme,
  currentTheme,
  onToggleAdmin,
}) {
  return (
    <div
      className={`header__topheader ${
        isAdmin ? "header__topheader_admin" : "header__topheader_user"
      }`}
    >
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <GubkinLogo className="header__logo" />
        <AuteamLogo className="header__logo" />
        <Text size="xs" font="mono" style={{ color: "white" }}>
          Музей компьютеров и вычислительной техники РГУ нефти и газа (НИУ)
          имени И.М. Губкина
        </Text>
      </div>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {isAdmin && (
          <Text
            size="xs"
            font="mono"
            style={{ color: "var(--color-typo-secondary)" }}
          >
            Администратор
          </Text>
        )}

        <Button
          label={isAdmin ? "Выйти" : "Войти"}
          view="ghost"
          size="xs"
          form="brick"
          onClick={onToggleAdmin}
        />

        <Button
          size="xs"
          view="ghost"
          onlyIcon={true}
          iconRight={IconSun}
          form="brick"
          label={`Тема: ${currentTheme}`}
          onClick={onToggleTheme}
        />
      </div>
    </div>
  );
}
