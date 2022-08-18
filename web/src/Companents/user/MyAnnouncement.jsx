import React, { useState } from "react";
import LinksForUser from "./LinksForUser";
import AllAdv from "./my-announcement/AllAdv";
import Published from "./my-announcement/Published";
import "./UserAccaunt.css";

export default function MyAnnouncement({ posts }) {
  const [clicked, setclicked] = useState("Все");
  function handleClick(e) {
    setclicked(e.target.value);
  }
  return (
    <div>
      <LinksForUser />
      <div className="myAnnoun__companent">
        <button onClick={handleClick} value="Все">
          Все ({posts.length})
        </button>
        /
        <button onClick={handleClick} value="Опубликованные">
          Опубликованные (0)
        </button>
        /
        <button onClick={handleClick} value="На проверке">
          На проверке (0)
        </button>
        /
        <button onClick={handleClick} value="Скрытые">
          Скрытые (0)
        </button>
        /
        <button onClick={handleClick} value="Отклоненые">
          Отклоненые (0)
        </button>
        /
        <button onClick={handleClick} value="На удаление">
          На удаление (0)
        </button>
      </div>

      <div style={{ color: "white", marginLeft: "180px", marginTop: "150px" }}>
        {clicked === "Все" ? (
          <AllAdv />
        ) : clicked === "Опубликованные" ? (
          <h1>Опуууууууууууу</h1>
        ) : clicked === "На проверке" ? (
          <h1>foooooooo</h1>
        ) : clicked === "Скрытые" ? (
          <h1>foooooooo</h1>
        ) : clicked === "Отклоненые" ? (
          <h1>foooooooo</h1>
        ) :  (
          <h1>foooededooooo</h1>
        )}
      </div>
    </div>
  );
}
