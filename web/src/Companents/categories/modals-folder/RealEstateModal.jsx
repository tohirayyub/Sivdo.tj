import React, { useEffect, useState } from "react";
import "../ModalStyles.css";
import { Link } from "react-router-dom";
import { RealEstate } from "../../data/RealEstate.data";

export default function RealEstateModal({ setOpenModal, categoryName }) {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9009/post-list")
      .then((res) => res.json())
      .then((loadPosts) => setposts(loadPosts));
  }, []);

 const counterPost = posts.length

  const realEstates = RealEstate;
  return categoryName.id === 1 ? (
    <div onClick={() => setOpenModal(false)} className="modal__background">
      <div className="modal__container">
        <Link to="/real-estate/all-rubric">
          <span className="show__all__rubric">
            Показать все объявления в рубрике ({counterPost})
          </span>
        </Link>
        <ul className="ul__rubric">
          {realEstates.map((realEstate) => (
            <Link to={realEstate.link} key={realEstate.id}>
              <li>{realEstate.title}</li>
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
//   <Link to="/d">
//     {" "}
//     <li>Аренда комнат</li>{" "}
//   </Link>
//   <Link to="/d">
//     {" "}
//     <li>Аренда квартир</li>{" "}
//   </Link>
//   <Link to="/d">
//     {" "}
//     <li>Аренда квартир посуточно</li>{" "}
//   </Link>
//   <Link to="/d">
//     {" "}
//     <li>Аренда домов(хавли) и дач</li>{" "}
//   </Link>
//   <Link to="/d">
//     {" "}
//     <li>Аренда офисов и помещеный</li>{" "}
//   </Link>
//   <Link to="/d">
//     {" "}
//     <li>Продажа квартир</li>{" "}
//   </Link>
//   <Link to="/d">
//     {" "}
//     <li>Продажа домов (хавли) и дач</li>{" "}
//   </Link>
//   <Link to="/d">
//     {" "}
//     <li>Продажа, аренда построек с земелным участком</li>{" "}
//   </Link>
// </ul>
