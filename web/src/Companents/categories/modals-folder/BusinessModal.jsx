import React from "react";
import "../ModalStyles.css";
import { Link } from "react-router-dom";

export default function BusinessModal({ setOpenModal, categoryName }) {
  return categoryName.id === 14 ? (
    <div onClick={() => setOpenModal(false)} className="modal__background">
      <div className="modal__container">
        <Link to="/real-estate/all-rubric">
          <span className="show__all__rubric">
            Показать все объявления в рубрике (31 541)
          </span>
        </Link>
        <ul className="ul__rubric">
          <Link to="/d">
            {" "}
            <li>Бизнес на продажу</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Бизнес на продажу</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Сырьё и материалы для бизнеса</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Готовый бизнес в аренду</li>{" "}
          </Link>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
