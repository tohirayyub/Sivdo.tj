import React from "react";
import "../ModalStyles.css";
import { Link } from "react-router-dom";

export default function KidsModal({ setOpenModal, categoryName }) {
  return categoryName.id === 5 ? (
    <div onClick={() => setOpenModal(false)} className="modal__background">
      <div className="modal__container">
        <Link to="/real-estate/all-rubric">
          <span className="show__all__rubric">
            Показать все объявления в рубрике (31 541)
          </span>
        </Link>{" "}
        <ul className="ul__rubric dflex">
          <li>
          <Link to="/d">
            {" "}
            <li>Детская одежда</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Детская одежда</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Детская мебель</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Детские коляски, качели</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Детские автокресла</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Детский транспорт</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Детские часы</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Игрушки</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Товары для мам</li>{" "}
          </Link>
          </li>
          <li>
          <Link to="/d">
            {" "}
            <li>Товары для кормления</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Товары для школьников</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Другие детские товары</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Товары для детского купания</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Постельные принадлежности</li>{" "}
          </Link>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
