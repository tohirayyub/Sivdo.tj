import React from "react";
import "../ModalStyles.css";
import { Link } from "react-router-dom";
import { Vacancies } from "../../data/Vacancies.data";

export default function VacancyModal({ setOpenModal, categoryName }) {
  const vacancies = Vacancies;
  return categoryName.id === 3 ? (
    <div onClick={() => setOpenModal(false)} className="modal__background">
      <div className="modal__container">
        <Link to="/real-estate/all-rubric">
          <span className="show__all__rubric">
            Показать все объявления в рубрике (31 541)
          </span>
        </Link>{" "}
        <ul className="ul__rubric dflex">
          {vacancies.map((vacancy) => (
            <Link to={vacancy.link} key={vacancy.id}>
              <li>{vacancy.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}

// {/* <li>
//             <Link to="/d">
//               {" "}
//               <li>Административный персонал</li>{" "}
//             </Link>
//             <Link to="/d">
//               {" "}
//               <li>HR, кадры</li>{" "}
//             </Link>
//             <Link to="/d">
//               {" "}
//               <li>IT, телеком, компьютеры</li>{" "}
//             </Link>
//             <Link to="/d">
//               {" "}
//               <li>Банки, страхование, лизинг</li>{" "}
//             </Link>
//             <Link to="/d">
//               {" "}
//               <li>Бухгалтерия, финансы, юристы</li>{" "}
//             </Link>
//             <Link to="/d">
//               {" "}
//               <li>Государственные службы</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Домашний персонал, обслуживание</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Кадровые агентства</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Красота, фитнес, спорт</li>{" "}
//             </Link>{" "}
//           </li>
//           <li>
//             <Link to="/d">
//               {" "}
//               <li>Маркетинг, реклама, дизайн</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Медицина, фармация</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Начало карьеры, студенты</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Образование, культура, искусство</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Охрана, безопасность</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Продажи, розничная торговля</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Производство, энергетика</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Производство, энергетика</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Рабочий персонал, разнорабочие</li>{" "}
//             </Link>{" "}
//           </li>
//           <li>
//             <Link to="/d">
//               {" "}
//               <li>Руководители</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>СМИ, издательство</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Строительство, недвижимость</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Транспорт, логистика, склад</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Туризм, гостиницы, развлечения</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Частичная занятость</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Работа за рубежом</li>{" "}
//             </Link>{" "}
//             <Link to="/d">
//               {" "}
//               <li>Другие сферы занятий</li>{" "}
//             </Link>
//           </li> */}
