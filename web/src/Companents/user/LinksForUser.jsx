import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./UserAccaunt.css";

export default function LinksForUser() {
  const pathname = useLocation().pathname;

  return (
    <div className="user__companent">
      <div className="user__navigation">
        <ul>
          <Link
            className={pathname === "/user/my-adv" ? "active" : ""}
            to="/user/my-adv"
          >
            <li>Мои объявления</li>
          </Link>
          <Link
            className={pathname === "/user/my-payments" ? "active" : ""}
            to="/user/my-payments"
          >
            <li>Мои платежи</li>
          </Link>
          <Link
            className={pathname === "/user/settings" ? "active" : ""}
            to="/user/settings"
          >
            <li>Мои настройки</li>
          </Link>
        </ul>
        <li>
          <span
            style={{
              marginRight: "20px",
              textDecoration: "underline solid green 1px",
            }}
          >
            В кошельке: 110 c
          </span>
          <button className="full_up_purse">Пополнить кошелек</button>
        </li>
      </div>
    </div>
  );
}
