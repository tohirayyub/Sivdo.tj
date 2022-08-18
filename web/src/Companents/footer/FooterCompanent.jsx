import "./FooterStyle.css";
import { Link } from "react-router-dom";
import { BiNews } from "react-icons/bi";
import { GrAddCircle } from "react-icons/gr";
import AddAdvertisement from "../add-adv/AddAdvertisement";

export function FooterCompanent({ setOnOpenModalAdv, onOpenModalAdv }) {
  return (
    <div className="footer__all">
      <div className="footer__companent">
        <div
          onClick={() => setOnOpenModalAdv(true)}
          className="new__ad add__ad__bg"
        >
          <i>
            <GrAddCircle />
          </i>
          <span className="new__ad">Подать объявление</span>
        </div>

        <Link to="/new__ad" className="new__ad new__ad__bg">
          <i>
            <BiNews />
          </i>
          <span className="new__ad">Новые объявления</span>
        </Link>
      </div>
      {onOpenModalAdv && (
        <AddAdvertisement setOnOpenModalAdv={setOnOpenModalAdv} />
      )}
    </div>
  );
}
