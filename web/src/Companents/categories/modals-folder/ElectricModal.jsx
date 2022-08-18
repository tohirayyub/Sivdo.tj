import React from "react";
import "../ModalStyles.css";
import { Link } from "react-router-dom";

export default function ElectricModal({ setOpenModal, categoryName }) {
  return categoryName.id === 8 ? (
    <div onClick={() => setOpenModal(false)} className="modal__background">
      <div className="modal__container">
        <Link to="/real-estate/all-rubric">
          <span className="show__all__rubric">
            Показать все объявления в рубрике (31 541)
          </span>
        </Link>{" "}
        <ul className="ul__rubric">
          <Link to="/d">
            <li>Фото и видеокамеры</li>
          </Link>
          <Link to="/d">
            <li>TV, DVD и видео</li>
          </Link>
          <Link to="/d">
            <li>Аудио и стерео</li>
          </Link>
          <Link to="/d">
            <li>Техника для дома и кухни</li>
          </Link>
          <Link to="/d">
            <li>Для личного ухода</li>
          </Link>
          <Link to="/d">
            <li>Принадлежности и аппараты для здоровья</li>
          </Link>
          <Link to="/d">
            <li>Аксессуары и комплектующие</li>
          </Link>
          <Link to="/d">
            <li>Электронные компоненты и радиодетали</li>
          </Link>
          <Link to="/d">
            <li>Системы видеонаблюдения, охраны, "Умный дом"</li>
          </Link>
          <Link to="/d">
            <li>Другая техника</li>
          </Link>
          <Link to="/d">
            <li>Климатическая техника</li>
          </Link>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
