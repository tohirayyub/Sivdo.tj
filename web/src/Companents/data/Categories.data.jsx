import { AiFillCar, AiFillFolderOpen, AiFillFormatPainter, AiFillHome, AiFillPhone, AiTwotoneSkin } from "react-icons/ai";
import { FaCat, FaHandsHelping } from "react-icons/fa";
import { GiReceiveMoney, GiSofa } from "react-icons/gi";
import { MdChildFriendly, MdOutlineSportsVolleyball, MdQueryStats, MdRadio } from "react-icons/md";
import { RiComputerFill, RiMagicFill } from "react-icons/ri";


export const Categories = [
    {
      id: 1,
      title: "Недвижимость",
      icon: <AiFillHome />,
    },
    {
      id: 2,
      title: "Транспорт",
      icon: <AiFillCar />,
    },
    {
      id: 3,
      title: "Вакансии",
      icon: <AiFillFolderOpen />,
    },
    {
      id: 4,
      title: "Телефоны и связь",
      icon: <AiFillPhone />,
    },
    {
      id: 5,
      title: "Детскый мир",
      icon: <MdChildFriendly />,
    },
    {
      id: 6,
      title: "Одежда и личные вещи",
      icon: <AiTwotoneSkin />,
    },
    {
      id: 7,
      title: "Комьютеры и оргтехника",
      icon: <RiComputerFill />,
    },
    {
      id: 8,
      title: "Электроника и бытовая техника",
      icon: <MdRadio />,
    },
    {
      id: 9,
      title: "Все для дома",
      icon: <GiSofa />,
    },
    {
      id: 10,
      title: "Строительство, сырье и ремонт",
      icon: <AiFillFormatPainter />,
    },
    {
      id: 11,
      title: "Хобби, музыка и спорт",
      icon: <MdOutlineSportsVolleyball />,
    },
    {
      id: 12,
      title: "Животные и растения",
      icon: <FaCat />,
    },
    {
      id: 13,
      title: "Услуги",
      icon: <MdQueryStats />,
    },
    {
      id: 14,
      title: "Все для бизнеса",
      icon: <GiReceiveMoney />,
    },
    {
      id: 15,
      title: "Отдам даром",
      icon: <RiMagicFill />,
    },
    {
      id: 16,
      title: "Помощь нуждающимся",
      icon: <FaHandsHelping />,
    },
  ];