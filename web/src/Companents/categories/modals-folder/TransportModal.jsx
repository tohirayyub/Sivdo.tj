import React from "react";
import "../ModalStyles.css";
import { Link } from "react-router-dom";
import { Trasnports } from "../../data/Transport-categories";

export default function TransportModal({ setOpenModal, categoryName }) {
  const transports = Trasnports;
  return categoryName.id === 2 ? (
    <div onClick={() => setOpenModal(false)} className="modal__background">
      <div className="modal__container">
        <Link to="/real-estate/all-rubric">
          <span className="show__all__rubric">
            Показать все объявления в рубрике (31 541)
          </span>
        </Link>
        <ul className="ul__rubric">
          {transports.map((transport) => (
            <Link to={transport.link} key={transport.id}>
              <li>{transport.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}

// <ul className="ul__rubric">
//           <Link to="/d">

//             <li>Легковые автомобили</li>
//           </Link>
//           <Link to="/d">

//             <li>Мото транспорт</li>
//           </Link>
//           <Link to="/d">

//             <li>Спецтехника и грузовой транспорт</li>
//           </Link>
//           <Link to="/d">

//             <li>Автобусы</li>
//           </Link>
//           <Link to="/d">

//             <li>Прицепы и контейнеры</li>
//           </Link>
//           <Link to="/d">

//             <li>Запчасти и принадлежности</li>
//           </Link>
//           <Link to="/d">

//             <li>Автосервис и ремонт</li>
//           </Link>
//           <Link to="/d">

//             <li>Другой транспорт</li>
//           </Link>
//         </ul>
