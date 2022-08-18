import React from "react";
import "../ModalStyles.css";
import { Link } from "react-router-dom";

export default function ClothesModal({ setOpenModal, categoryName }) {
  return categoryName.id === 6 ? (
    <div onClick={() => setOpenModal(false)} className="modal__background">
      <div className="modal__container">
        <Link to="/real-estate/all-rubric">
          <span className="show__all__rubric">
            Показать все объявления в рубрике (31 541)
          </span>
        </Link>{" "}
        <ul className="ul__rubric">
          <Link to="/d">
            <li>Мужская одежда</li>
          </Link>
          <Link to="/d">
            <li>Женская одежда</li>
          </Link>
          <Link to="/d">
            <li>Обувь</li>
          </Link>
          <Link to="/d">
            {" "}
            <li>Аксессуары, шарфы, головные уборы</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Парфюмерия и косметика</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Часы и украшения</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Для свадьбы</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Одежда на прокат</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Другие товары</li>{" "}
          </Link>
          <Link to="/d">
            {" "}
            <li>Потери и находки</li>{" "}
          </Link>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
