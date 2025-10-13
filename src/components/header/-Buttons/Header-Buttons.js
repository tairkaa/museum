import React from "react";
import { Button } from "@consta/uikit/Button";
import { useNavigate } from "react-router-dom";

import "./Header-Buttons.css";
import "./_admin/Header-Buttons_admin.css";
import "./_user/Header-Buttons_user.css";

export function HeaderButtons({ isAdmin }) {
  const navigate = useNavigate();

  const handleImportCsv = () => {
    navigate("/importcsv");
  };

  const handleImportPhoto = () => {
    navigate("/addphoto");
  };

  return (
    <div
      className={`header__buttons ${
        isAdmin ? "header__buttons_admin" : "header__buttons_user"
      }`}
    >
      {isAdmin && (
        <>
          <Button
            label="Импорт CSV"
            view="ghost"
            size="s"
            form="brick"
            onClick={handleImportCsv}
          />
          <Button
            label="Импорт фото"
            view="ghost"
            size="s"
            form="brick"
            onClick={handleImportPhoto}
          />
          <Button label="Скачать таблицу" view="ghost" size="s" form="brick" />
        </>
      )}
    </div>
  );
}
