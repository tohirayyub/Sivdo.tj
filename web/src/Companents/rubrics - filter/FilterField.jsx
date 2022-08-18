import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostInCategories from "../post-in-categories/PostInCategories";
import "./FilterFieldStyles.css";

export default function FilterField() {
  const [filterPrice, setfilterPrice] = useState("Все цени");
console.log(filterPrice)

  const PriceOption = [
    { id: 1, price: 100 },
    { id: 2, price: 1000 },
    { id: 3, price: 3000 },
    { id: 4, price: 5000 },
    { id: 5, price: 8000 },
    { id: 6, price: 10000 },
    { id: 7, price: 20000 },
    { id: 8, price: 25000 },
    { id: 9, price: 30000 },
    { id: 10, price: 35000 },
  ];
  // const [categoriesPag, setcategoriesPag] = useState([]);
  // const [loadingPag, setloadingPag] = useState(false);
  // const [currentPagePag, setcurrentPagePag] = useState(1);
  // const [categoriesPerPagePag, setcategoriesPerPagePag] = useState(10);

  // useEffect(() => {
  //   const getCategoriesPag = async () => {
  //     setloadingPag(true);
  //     const res = await fetch("http://localhost:9009/post-list");
  //     const response = await res.json();
  //     setcategoriesPag(response)
  //     setloadingPag(false);
  //   };
  //   getCategoriesPag();
  // }, []);

  return (
    <div>
      <div className="filter__container">
        <span className="at_to_select">до:</span>
        <select
          onChange={(e) => setfilterPrice(e.target.value)}
          className="select__price"
        >
          
          <option value="Все цени">Все цени</option>
          {PriceOption.map((e) => (
            <option key={e.id} value={e.price}>
              {e.price}
            </option>
          ))}

        </select>
        <Link to="/">
          <button className="search__btn__price">НАЗАД</button>
        </Link>
      </div>
      <PostInCategories filterPrice={filterPrice}
      // categoriesPag={categoriesPag} loadingPag={loadingPag}
      />
    </div>
  );
}
