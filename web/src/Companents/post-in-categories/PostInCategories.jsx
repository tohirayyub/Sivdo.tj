import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./PostInCategories.css";
import img from "./12.jpeg";
import { BsFillArrowUpCircleFill, BsFillTelephoneFill } from "react-icons/bs";

export default function PostInCategories({filterPrice}) {
  const [posts, setposts] = useState([]);
  const [openPostModal, setOpenPostModal] = useState(false);
  const [fullInfo, setFullInfo] = useState([]);
// console.log(filterPrice)
  useEffect(() => {
    fetch("http://localhost:9009/post-list")
      .then((res) => res.json())
      .then((loadPosts) => setposts(loadPosts));
  }, []);

  function scrolltoUp() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  function openItemOnCategory(posts) {
    setOpenPostModal(true);
    setFullInfo(posts);
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
               <img src={img} alt=""  width={450}/>
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
                  <p style={{ width: "540px" , wordBreak:'break-word'}}>{fullInfo.description}</p>
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
      <div className="post_companent">
        {posts
        .filter((item)=> filterPrice === 'Все цени' ? item : item.price === filterPrice)
        .map((posts, index) => (
          <div
            key={index}
            onClick={() => openItemOnCategory(posts)}
            className="posts__companent"
          >
            <div>
              <img className="post__image" src={img} alt="" width={220} />
            </div>
            <div className="card__text">
              <span className="titles__post">
                {posts.room} комн. квартира, {posts.floor} этаж, {posts.square}
                м², {posts.selectcity}
              </span>
              <br />
              <span>{posts.price} c</span>
            </div>
          </div>
        ))}

        <button
        className="scroll_to_top"
          onClick={scrolltoUp}
          style={{
            position: "fixed",
            top: "97%",
            right: "-9%",
            zIndex: "1",
          }}
        >
        <BsFillArrowUpCircleFill/>
        </button>
      </div>
    </div>
  );
}
