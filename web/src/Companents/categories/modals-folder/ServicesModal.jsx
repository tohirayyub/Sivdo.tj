import React from "react";
import "../ModalStyles.css";
import { Link } from "react-router-dom";

export default function ServicesModal({ setOpenModal, categoryName }) {
  return categoryName.id === 13 ? (
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
              <li>Для праздников и мероприятий</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Интернет и IT услуги</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Кулинария</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Красота</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Няни и сиделки</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Перевозки и аренда транспорта</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Прокат товаров</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Рекламные услуги и полиграфия</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Ремонт и установка бытовой техники</li>{" "}
            </Link>
          </li>
          <li>
            <Link to="/d">
              {" "}
              <li>Риелторские услуги</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Строительные и ремонтные услуги</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Туризм и отдых</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Уборка и чистка</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Услуги переводчиков</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Установка оборудования</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Учебные курсы и обучение</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Финансы, кредиты</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Фото и видеосъёмка</li>{" "}
            </Link>
          </li>{" "}
          <li>
            <Link to="/d">
              {" "}
              <li>Юридические услуги</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Handmade и рукоделие</li>{" "}
            </Link>
            <Link to="/d">
              {" "}
              <li>Другие услуги</li>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
