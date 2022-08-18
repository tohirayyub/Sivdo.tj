import React from "react";
import "../ModalStyles.css";
import { Link } from "react-router-dom";

export default function TelefonModal({ setOpenModal, categoryName }) {
  return categoryName.id === 4 ? (
    <div onClick={() => setOpenModal(false)} className="modal__background">
      <div className="modal__container">
        <Link to="/real-estate/all-rubric">
          <span className="show__all__rubric">
            Показать все объявления в рубрике (31 541)
          </span>
        </Link>{" "}
        <ul className="ul__rubric">
          <Link to="/d">
            {" "}
            <li>Мобильные телефоны</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Аксессуары для телефонов</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Ремонт и сервис телефонов</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Запчасти и инструменты для телефонов</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Стационарные телефоны</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Другая техника связи</li>{" "}
          </Link>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
