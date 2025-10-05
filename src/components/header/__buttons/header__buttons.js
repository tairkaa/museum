import React from "react";
import { Button } from "@consta/uikit/Button";

import "./header__buttons.css";
import "./_admin/header__buttons_admin.css";
import "./_user/header__buttons_user.css";

export function HeaderButtons({ isAdmin }) {
  return (
    <div
      className={`header__buttons ${
        isAdmin ? "header__buttons_admin" : "header__buttons_user"
      }`}
    >
      {isAdmin && (
        <>
          <Button label="Импорт CSV" view="ghost" size="s" form="brick" />
          <Button label="Импорт фото" view="ghost" size="s" form="brick" />
          <Button label="Скачать таблицу" view="ghost" size="s" form="brick" />
        </>
      )}
    </div>
  );
}
