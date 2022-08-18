import React from "react";
import { Link } from "react-router-dom";
import LinksForUser from "./LinksForUser";

export default function MyPayments() {
  return (
    <div>
      <LinksForUser />
      <div className="myAnnoun__companent">
        <button>Все платежи (0)</button>/<button>Пополнения</button>/
        <button>Списания</button>
      </div>
    </div>
  );
}
