import React from "react";
import { Link } from "react-router-dom";

export default function FourthStepForm({ inputData }) {
  function onSendFormInDB() {
    fetch("http://localhost:9009/form-save", {
      method: "post",
      body: JSON.stringify(inputData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.reload()
  }
  return (
    <div>
      <form action="">
        <Link to='/real-estate/all-rubric'><button onClick={onSendFormInDB}>Отправить обявлению</button></Link>
        {/* <h1>Ваша объявление отправлена!</h1>
      <h4> Спасибо что нас выбрали!</h4> */}
      </form>
    </div>
  );
}
