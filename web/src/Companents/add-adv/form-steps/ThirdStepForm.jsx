import React from "react";

export default function ThirdStepForm({
  onChangeInput,
  whatsapp,
}) {
  const CitySelector = [
    {
      id: 1,
      city: "Душанбе",
    },
    {
      id: 2,
      city: "Истаравшан",
    },
    {
      id: 3,
      city: "Хучанд",
    },
    {
      id: 4,
      city: "Кулоб",
    },
    {
      id: 5,
      city: "Исфара",
    },
    {
      id: 6,
      city: "Конибодом",
    },
  ];

  return (
    <div className="third__form_companent input__title">
      <span>Заполните пустые поля</span>
      <form action="">
        <div>
          <span>Город:</span>
          <select
            onChange={onChangeInput("selectCity")}
            className="select__style"
          >
            {CitySelector.map((city) => (
              <option key={city.id} value={city.city}>
                {city.city}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span>Имя:</span>
          <input
            type="text"
            placeholder="Анвар Аброров"
            onChange={onChangeInput("name")}
          />
        </div>
        <div>
          <span>Email:</span>
          <input
            type="email"
            onChange={onChangeInput("email")}
            placeholder="anvarabrorov12@mail.ru"
          />
        </div>
        <div>
          <span>Телефон:</span>
          <input
            type="number"
            placeholder="+992981013200"
            onChange={onChangeInput("telefon")}
          />
        </div>
        <div>
          {/* <span>Телефон и чат</span> */}
          <label htmlFor="telefon and chat">Телефон и чат</label>
          <input
            type="radio"
            name="radios"
            id=""
            value="telefon and chat"
            onChange={onChangeInput("radio")}
          />
          <br />
          {/* <span>Только телефон</span> */}
          <label htmlFor="telefon">Только телефон</label>
          <input
            type="radio"
            name="radios"
            id=""
            value="telefon"
            onChange={onChangeInput("radio")}
          />
        </div>
        <div>
          <span>Месенджер:</span>
          <input
            onChange={onChangeInput('whatsapp')}
            checked={whatsapp}
            type="checkbox"
            name=""
            id=""
          />
        </div>
      </form>
    </div>
  );
}
