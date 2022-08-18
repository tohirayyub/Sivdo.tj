import React from "react";
import { CategoriesCompanent } from "././categories/CategoriesCompanent";
import { FooterCompanent } from "././footer/FooterCompanent";

export default function CategoriesFooter({ setOnOpenModalAdv }) {
  return (
    <div>
      <CategoriesCompanent />
      <FooterCompanent setOnOpenModalAdv={setOnOpenModalAdv} />
    </div>
  );
}
