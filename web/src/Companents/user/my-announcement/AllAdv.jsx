import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import img from "./12.jpeg";
import "../UserAccaunt.css";
export default function AllAdv() {
  const [posts, setposts] = useState([]);
  const [modalDeletPost, setmodalDeletPost] = useState(false);
  const [idclicked, setidclicked] = useState();

  useEffect(() => {
    fetch("http://localhost:9009/post-list")
      .then((res) => res.json())
      .then((loadPosts) => setposts(loadPosts));
  }, []);

  function clikedPostid(post) {
    setidclicked(post);
    setmodalDeletPost(true);
  }

  console.log(idclicked);

  function deletePost() {
    fetch(`http://localhost:9009/post-delete`, {
      method: "POST",
      body: JSON.stringify({ id: idclicked }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
  }

  return (
    <>
      {posts.map((post, key) => (
        <div key={key} className="all_advv">
          <div className="all_advv_img_and_titles">
            <img src={img} alt="" width={140} />
            <div className="all_advv_titles">
              <span>ID:{post.id}</span>
              <span>
                {post.selected} / {post.secondselected} / {post.region}
              </span>
              <span>
                {post.floor} этаж / {post.square}м² / {post.room} ком
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginRight: "20px",
              alignItems: "center",
            }}
          >
            <span className="delete_price">{post.price} c</span>
            <button
              className="delete_post_btn"
              onClick={() => clikedPostid(post.id)}
            >
              <AiFillDelete />
            </button>
          </div>
        </div>
      ))}
      {modalDeletPost && (
        <div onClick={() => setmodalDeletPost(false)} className="bg_modal_delete">
          <div onClick={(e)=> e.stopPropagation()} className="modal_delete_post">
            <span>Хотите удалить пост?</span>
            <div className="button_delete_post">
              <button onClick={() => deletePost()}>ДА</button>
              <button onClick={() => setmodalDeletPost(false)}>НЕТ</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
