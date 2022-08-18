import React, { useState } from "react";

import "./AddAdvertisementStyle.css";
import RealEstateCategForSteps from "././form-second-step/RealEstateCategForSteps";
import FirstStepForm from "./form-steps/FirstStepForm";
import FourthStepForm from "./form-steps/FourthStepForm";
// import SecondStepForm from "./form-steps/SecondStepForm";
import ThirdStepForm from "./form-steps/ThirdStepForm";

export default function AddAdvertisement({ setOnOpenModalAdv }) {
  const [page, setPage] = useState(0);

  const [images, setImages] = useState([]);
  const [checkedTrade, setCheckedTrade] = useState();
  const [checkedExchange, setCheckedExchange] = useState();
  const [whatsapp, setWhatsapp] = useState();

  const [inputData, setInputData] = useState({
    selected: "Недвижимость",
    secondSelected: "",
    title: "",
    region: "",
    floor: 0,
    square: 0,
    room: 0,
    images: images,
    description: "",
    checkedTrade: checkedTrade,
    checkedExchange: checkedExchange,
    price: 0,
    selectCity: "",
    name: "",
    email: "",
    telefon: "",
    radio: "",
    whatsapp: whatsapp,
  });

  
  const onChangeInput = (key) => (el) => {
    setInputData({
      ...inputData,
      [key]: el.target.value,
    });
  };

  const CompanentsForSecondStepForm = [
    {
      id: 1,
      companent: (
        <RealEstateCategForSteps
          onChangeInput={onChangeInput}
          setImages={setImages}
          checkedTrade={checkedTrade}
          checkedExchange={checkedExchange}
        />
      ),
      title: "Недвижимость",
    },
    {
      id: 2,
      companent: "2component",
      title: "Транспорт",
    },
  ];

  function PageDisplay() {
    if (page === 0) {
      return (
        <FirstStepForm
          inputData={inputData}
          setOnOpenModalAdv={setOnOpenModalAdv}
          onChangeInput={onChangeInput}
        />
      );
    } else if (page === 1) {
      if (inputData.selected !== CompanentsForSecondStepForm.title) {
        return CompanentsForSecondStepForm.filter(
          (element) => element.title === inputData.selected
        ).map((el) => <>{el.companent}</>);
      }
    } else if (page === 2) {
      return (
        <ThirdStepForm onChangeInput={onChangeInput} whatsapp={whatsapp} />
      );
    } else if (page === 3) {
      return (
        <FourthStepForm
          inputData={inputData}
        />
      );
    }
  }

  return (
    <div className="modal__background_adv">
      <div className="progress__bar">
        <div
          style={{
            width:
              page === 0
                ? "25%"
                : page === 1
                ? "50%"
                : page === 2
                ? "75%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="modal__companent_adv">
        <span
          className="close__addadv"
          onClick={() => setOnOpenModalAdv(false)}
        >
          ЗАКРЫТЬ
        </span>
        {PageDisplay()}
        {page !== 3 ? (
          <div className="footer__next_prev">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              НАЗАД
            </button>
            <button
              disabled={page === 3}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              ДАЛЕЕ
            </button>
          </div>
        ) : (
          <div className="footer__next_prev">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              НАЗАД
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
