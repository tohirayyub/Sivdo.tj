import React from "react";
import "../ModalStyles.css";
import { Link } from "react-router-dom";

export default function HelpModal({ setOpenModal, categoryName }) {
  return categoryName.id === 16 ? (
    <div onClick={() => setOpenModal(false)} className="modal__background">
      <div className="modal__container">
        <span className="show__all__rubric">
          Показать все объявления в рубрике
        </span>
        <ul className="ul__rubric">
          <Link to="/d">
            {" "}
            <li>Помощь нуждающимся</li>{" "}
          </Link>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
