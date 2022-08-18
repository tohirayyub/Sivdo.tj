import React from "react";
import "../ModalStyles.css";
import { Link } from "react-router-dom";

export default function ComputerModal({ setOpenModal, categoryName }) {
  return categoryName.id === 7 ? (
    <div onClick={() => setOpenModal(false)} className="modal__background">
      <div className="modal__container">
        <Link to="/real-estate/all-rubric">
          <span className="show__all__rubric">
            Показать все объявления в рубрике (31 541)
          </span>
        </Link>{" "}
        <ul className="ul__rubric">
          <Link to="/d">
            <li>Ноутбуки</li>
          </Link>
          <Link to="/d">
            <li>Персональные компьютеры</li>
          </Link>
          <Link to="/d">
            <li>Игровые приставки</li>
          </Link>
          <Link to="/d">
            <li>Программы и игры</li>
          </Link>
          <Link to="/d">
            <li>Планшеты и букридеры</li>
          </Link>
          <Link to="/d">
            <li>Принтеры и сканеры</li>
          </Link>
          <Link to="/d">
            <li>Мониторы и проекторы</li>
          </Link>
          <Link to="/d">
            <li>Модемы и сетевое оборудование</li>
          </Link>
          <Link to="/d">
            <li>Комплектующие и аксессуары</li>
          </Link>
          <Link to="/d">
            <li>Ремонт</li>
          </Link>
          <Link to="/d">
            <li>Серверы</li>
          </Link>
          <Link to="/d">
            <li>Другая техника</li>
          </Link>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
