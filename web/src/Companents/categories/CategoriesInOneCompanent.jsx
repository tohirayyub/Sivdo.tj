import React, { useState } from "react";
import { Categories } from "../data/Categories.data";
import "./CategoriesStyle.css";
import AnimalsModal from "./modals-folder/AnimalsModal";
import BuildingModal from "./modals-folder/BuildingModal";
import BusinessModal from "./modals-folder/BusinessModal";
import ClothesModal from "./modals-folder/ClothesModal";
import ComputerModal from "./modals-folder/ComputerModal";
import ElectricModal from "./modals-folder/ElectricModal";
import FreeModal from "./modals-folder/FreeModal";
import HelpModal from "./modals-folder/HelpModal";
import HobbyModal from "./modals-folder/HobbyModal";
import HomeModal from "./modals-folder/HomeModal";
import KidsModal from "./modals-folder/KidsModal";
import RealEstateModal from "./modals-folder/RealEstateModal";
import ServicesModal from "./modals-folder/ServicesModal";
import TelefonModal from "./modals-folder/TelefonModal";
import TransportModal from "./modals-folder/TransportModal";
import VacancyModal from "./modals-folder/VacancyModal";

export default function CategoriesInOneCompanent() {
  const categories = Categories;

  const [openModal, setOpenModal] = useState(false);
  const [categoryName, setCategoryname] = useState("");

  function onClickModal(category) {
    setOpenModal(true);
    setCategoryname(category);
  }

  return (
    <>
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => onClickModal(category)}
          className="categories_container_first"
        >
          <div className="link__categories">
            <span className="card_categories">
              <span className="icons_categories">{category.icon}</span>
              <p>{category.title}</p>
            </span>
          </div>
        </div>
      ))}
      {openModal && (
        <RealEstateModal
          setOpenModal={setOpenModal}
          categoryName={categoryName}
        />
      )}
      {openModal && (
        <TransportModal
          setOpenModal={setOpenModal}
          categoryName={categoryName}
        />
      )}
      {openModal && (
        <VacancyModal setOpenModal={setOpenModal} categoryName={categoryName} />
      )}
      {openModal && (
        <TelefonModal setOpenModal={setOpenModal} categoryName={categoryName} />
      )}
      {openModal && (
        <KidsModal setOpenModal={setOpenModal} categoryName={categoryName} />
      )}
      {openModal && (
        <ClothesModal setOpenModal={setOpenModal} categoryName={categoryName} />
      )}
      {openModal && (
        <ComputerModal
          setOpenModal={setOpenModal}
          categoryName={categoryName}
        />
      )}
      {openModal && (
        <ElectricModal
          setOpenModal={setOpenModal}
          categoryName={categoryName}
        />
      )}
      {openModal && (
        <HomeModal setOpenModal={setOpenModal} categoryName={categoryName} />
      )}
      {openModal && (
        <BuildingModal
          setOpenModal={setOpenModal}
          categoryName={categoryName}
        />
      )}
      {openModal && (
        <HobbyModal setOpenModal={setOpenModal} categoryName={categoryName} />
      )}
      {openModal && (
        <AnimalsModal setOpenModal={setOpenModal} categoryName={categoryName} />
      )}
      {openModal && (
        <ServicesModal
          setOpenModal={setOpenModal}
          categoryName={categoryName}
        />
      )}
      {openModal && (
        <BusinessModal
          setOpenModal={setOpenModal}
          categoryName={categoryName}
        />
      )}
      {openModal && (
        <FreeModal setOpenModal={setOpenModal} categoryName={categoryName} />
      )}
      {openModal && (
        <HelpModal setOpenModal={setOpenModal} categoryName={categoryName} />
      )}
    </>
  );
}
