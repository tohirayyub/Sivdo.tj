import React, { useState } from "react";
import { Categories } from "../../data/Categories.data";
import { RealEstate } from "../../data/RealEstate.data";
import { Trasnports } from "../../data/Transport-categories";
import { Vacancies } from "../../data/Vacancies.data";

export default function FirstStepForm({
  selected,
  setSelected,
  setSecondSelected,
  secondSelected,
  onChangeInput,
  inputData
}) {
  const categories = Categories;
  const transports = Trasnports;
  const realEstate = RealEstate;
  const vacancies = Vacancies;

  return (
    <div>
      <h3>Подать объявление</h3>
      <span>Выберите категорию для объявления из списка ниже</span>
      <div className="selector__container">
        <div>
          <select
            className="select__style"
            // value={selected}
            onChange={onChangeInput('selected')}
          >
            {categories.map((category, index) => (
              <option key={index} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          {inputData.selected === "Транспорт" && (
            <select className="select__style">
              {transports.map((transport) => (
                <option value={transport.title} key={transport.id}>
                  {transport.title}
                </option>
              ))}
            </select>
          )}
          {inputData.selected === "Недвижимость" && (
            <select
              className="select__style"
              // value={secondSelected}
              onChange={onChangeInput('secondSelected')}
            >
              {realEstate.map((realestate) => (
                <option value={realEstate.title} key={realestate.id}>
                  {realestate.title}
                </option>
              ))}
            </select>
          )}
          {selected === "Вакансии" && (
            <select className="select__style">
              {vacancies.map((vacancy) => (
                <option value="" key={vacancy.id}>
                  {vacancy.title}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    </div>
  );
}
