import React from "react";
import "../ModalStyles.css";
import { Link } from "react-router-dom";

export default function HomeModal({ setOpenModal, categoryName }) {
  return categoryName.id === 9 ? (
    <div onClick={() => setOpenModal(false)} className="modal__background">
      <div className="modal__container">
        <Link to="/real-estate/all-rubric">
          <span className="show__all__rubric">
            Показать все объявления в рубрике (31 541)
          </span>
        </Link>{" "}
        <ul className="ul__rubric">
          <Link to="/d">
            <li>Мебель</li>
          </Link>
          <Link to="/d">
            <li>Текстиль и интерьер</li>
          </Link>
          <Link to="/d">
            <li>Пищевые продукты</li>
          </Link>
          <Link to="/d">
            <li>Посуда и кухонная утварь</li>
          </Link>
          <Link to="/d">
            <li>Хозяйственный инвентарь и бытовая химия</li>
          </Link>
          <Link to="/d">
            <li>Сад и огород</li>
          </Link>
          <Link to="/d">
            <li>Сейфы</li>
          </Link>
          <Link to="/d">
            <li>Канцтовары</li>
          </Link>
          <Link to="/d">
            <li>Другие товары для дома</li>
          </Link>
          <Link to="/d">
            <li>Товары для праздников</li>
          </Link>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
