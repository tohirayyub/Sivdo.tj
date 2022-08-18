import React, { useState } from "react";
import img from "./12.jpeg";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Search({ searchTerm, posts }) {
  const [openPostModal, setOpenPostModal] = useState(false);
  const [fullInfo, setFullInfo] = useState([]);

  function openItemOnCategory(el) {
    setOpenPostModal(true);
    setFullInfo(el);
  }
  return (
    <div>
      <div>
        {openPostModal && (
          <div className="fullInfo" onClick={() => setOpenPostModal(false)}>
            <div
              className="fullInfo__back"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <img src={img} alt="" width={450} />
              </div>
              <div className="info__texts">
                <div>
                  <span className="fullInfo__title">
                    {fullInfo.room}-комн. {fullInfo.secondselected},{" "}
                    {fullInfo.floor} этаж {fullInfo.square} м²,{" "}
                    {fullInfo.region}
                  </span>
                  <br />
                  <span style={{ color: "gray" }}>{fullInfo.selectcity}</span>
                  <br />
                  <span>Опубликовано: Вчера 20:59</span>{" "}
                  <span style={{ color: "gray" }}>
                    Номер объявления: {fullInfo.id}
                  </span>
                  <br />
                  <div>
                    <hr />
                    <span>
                      Район:
                      {fullInfo.region ? (
                        <b> {fullInfo.region}</b>
                      ) : (
                        <span style={{ color: "gray" }}>Не выбран регион </span>
                      )}{" "}
                    </span>
                    <span style={{ marginLeft: "30px" }}>
                      Количество комнат: <b>{fullInfo.room}</b>
                    </span>
                    <hr />
                  </div>
                  <div>
                    <span>
                      Этаж:
                      {fullInfo.floor ? (
                        <b> {fullInfo.floor}</b>
                      ) : (
                        <span style={{ color: "gray" }}>Не выбран регион </span>
                      )}
                    </span>
                    <span style={{ marginLeft: "105px" }}>
                      Тип застройки: <b>Новостройка</b>
                    </span>
                    <hr />
                  </div>
                  <p style={{ width: "500px" }}>{fullInfo.description}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "flex-end",
                  }}
                >
                  <span className="fullname__price">{fullInfo.price} c</span>
                  <span className="fullname__telefon">
                    {fullInfo.telefon} <BsFillTelephoneFill />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="post_companent for_search">
        {posts
          .filter((val) => {
            if (searchTerm !== "") {
              return val.secondselected
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase());
            } else {
              return val;
            }
          })
          .map((el, key) => (
            <div
              onClick={() => openItemOnCategory(el)}
              key={key}
              className="posts__companent"
            >
              <div>
                <img className="post__image" src={img} alt="" width={220} />
              </div>
              <div className="card__text">
                <span className="titles__post">
                  {el.room} комн. квартира, {el.floor} этаж, {el.square}
                  м², {el.selectcity}
                </span>
                <br />
                <span>{el.price} c</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
