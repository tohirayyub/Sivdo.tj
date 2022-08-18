import React from "react";
import "../ModalStyles.css";
import { Link } from "react-router-dom";

export default function BuildingModal({ setOpenModal, categoryName }) {
  return categoryName.id === 10 ? (
    <div onClick={() => setOpenModal(false)} className="modal__background">
      <div className="modal__container">
        <span className="show__all__rubric">
          Показать все объявления в рубрике
        </span>
        <ul className="ul__rubric">
          <Link to="/d">
            <li>Электроинструмент</li>
          </Link>
          <Link to="/d">
            <li>Ручной инструмент</li>
          </Link>
          <Link to="/d">
            <li>Строительные и отделочные материалы</li>
          </Link>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
