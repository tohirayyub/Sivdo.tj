import React from "react";
import "../ModalStyles.css";
import { Link } from "react-router-dom";

export default function HobbyModal({ setOpenModal, categoryName }) {
  return categoryName.id === 11 ? (
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
            <li>Спорт и инвентарь</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Велосипеды и принадлежности</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Книги и журналы</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>CD, DVD, пластинки и кассеты</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Антиквариат и коллекции</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Билеты</li>{" "}
          </Link>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
