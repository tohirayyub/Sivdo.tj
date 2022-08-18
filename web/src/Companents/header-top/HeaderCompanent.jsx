import { useEffect, useState } from "react";
import {
  BsFillBookmarkHeartFill,
  BsFillCaretDownFill,
  BsFillChatRightTextFill,
  BsFillCreditCardFill,
} from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import {IoLogOut} from 'react-icons/io5'
import { Link } from "react-router-dom";
import "./HeaderStyle.css";
export function HeaderCompanent({ posts, setposts, setSearchTerm }) {
  
  useEffect(() => {
    fetch("http://localhost:9009/post-list")
      .then((res) => res.json())
      .then((loadPosts) => setposts(loadPosts));
  }, []);

  const counterPost = posts.length;
  return (
    <div>
      <div className="header__all">
        <Link to="/">
          <span className="title_sivdo">S I V D O</span>
        </Link>

        <div className="header__container">
          <input
            type="text"
            className="input__search"
            placeholder="Я ищу..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to="/searching">
            <button className="button__search">
              <span>Найти</span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0303 17.9697C18.7374 17.6768 18.2626 17.6768 17.9697 17.9697C17.6768 18.2626 17.6768 18.7374 17.9697 19.0303L19.0303 17.9697ZM21.4697 22.5303C21.7626 22.8232 22.2374 22.8232 22.5303 22.5303C22.8232 22.2374 22.8232 21.7626 22.5303 21.4697L21.4697 22.5303ZM21.75 11.5C21.75 5.83908 17.1609 1.25 11.5 1.25V2.75C16.3325 2.75 20.25 6.66751 20.25 11.5H21.75ZM11.5 1.25C5.83908 1.25 1.25 5.83908 1.25 11.5H2.75C2.75 6.66751 6.66751 2.75 11.5 2.75V1.25ZM1.25 11.5C1.25 17.1609 5.83908 21.75 11.5 21.75V20.25C6.66751 20.25 2.75 16.3325 2.75 11.5H1.25ZM11.5 21.75C17.1609 21.75 21.75 17.1609 21.75 11.5H20.25C20.25 16.3325 16.3325 20.25 11.5 20.25V21.75ZM17.9697 19.0303L21.4697 22.5303L22.5303 21.4697L19.0303 17.9697L17.9697 19.0303Z"
                  fill="#000000"
                />
              </svg>
            </button>
          </Link>
          <div>
            <select className="select">
              <option value="0">Выбрать город</option>
              <option value="1">Душанбе</option>
              <option value="2">Худжанд</option>
              <option value="3">Айни</option>
              <option value="4">Ашт</option>
              <option value="5">Бохтар</option>
              <option value="6">Истаравшан</option>
              <option value="7">Ванч</option>
              <option value="8">Варзоб</option>
              <option value="9">Вахш</option>
              <option value="10">Дангара</option>
              <option value="11">Зафаробод</option>
              <option value="12">Исфара</option>
            </select>
          </div>

          <span className="text__ads">
            <b className="thing">{counterPost}</b> объявлений рядом
          </span>

          <div className="login__user">
            <span>Пользователь:</span>
            <span>
              <b>
                +992981013200 <BsFillCaretDownFill />
              </b>
            </span>
            <div className="dropdown__accaunt">
              <ul>
                <Link to="/user/my-adv">
                  <li>
                    <BsFillChatRightTextFill />
                    Мои объявления
                  </li>
                </Link>
                <Link to="/user/my-payments">
                  <li>
                    <BsFillCreditCardFill />
                    Платежи
                  </li>
                </Link>

                <Link to="/user/settings">
                  <li>
                    <RiSettings3Fill />
                    Настройки
                  </li>
                </Link>

                <Link to="/favorits">
                  <li>
                    <BsFillBookmarkHeartFill />
                    Избранное
                  </li>
                </Link>
                <Link to="/favorits">
                  <li>
                    <IoLogOut />
                    Выйти
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
