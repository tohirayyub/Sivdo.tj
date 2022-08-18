import React from "react";
import "../ModalStyles.css";
import { Link } from "react-router-dom";

export default function AnimalsModal({ setOpenModal, categoryName }) {
  return categoryName.id === 12 ? (
    <div onClick={() => setOpenModal(false)} className="modal__background">
      <div className="modal__container">
        <Link to="/real-estate/all-rubric">
          <span className="show__all__rubric">
            Показать все объявления в рубрике (31 541)
          </span>
        </Link>
        <ul className="ul__rubric">
          <Link to="/d">
            <li>Кролики</li>
          </Link>
          <Link to="/d">
            <li>Птицы</li>
          </Link>
          <Link to="/d">
            <li>Вязка</li>
          </Link>
          <Link to="/d">
            <li>Садовые растения</li>
          </Link>
          <Link to="/d">
            <li>Сельхоз животные</li>
          </Link>
          <Link to="/d">
            <li>Аквариумные</li>
          </Link>
          <Link to="/d">
            <li>Комнатные растения</li>
          </Link>
          <Link to="/d">
            <li>Товары для животных</li>
          </Link>
          <Link to="/d">
            <li>Другие животные</li>
          </Link>{" "}
          <Link to="/d">
            <li>Отдам даром</li>
          </Link>{" "}
          <Link to="/d">
            <li>Утерянные животные</li>
          </Link>
          <Link to="/d">
            <li>Корм для животных</li>
          </Link>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
