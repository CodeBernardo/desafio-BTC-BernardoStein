import { FaArrowLeft } from "react-icons/fa6";
import astronaut from "../../assets/imgs/Astronauta_0.png";
import { AddressCard } from "../../components/cards/addressCard";
import { addresslist } from "../../data";
import s from "./index.module.scss";

export const AddressesPage = (): JSX.Element => {
  return (
    <>
      <div className={`align ${s.page__header}`}>
        <button aria-label="Return">
          <FaArrowLeft size={16} />
        </button>
        <h1 className="title3 bold ">Address</h1>
      </div>
      <div className={`align ${s.addressList__container}`}>
        <div className={s.addresslist__items}>
          <div className={`${s.search__container}`}>
            <input type="text" placeholder="Search address" />
            <button className="text3 medium">Add address</button>
          </div>
          <h2 className="text2 bold">Address list</h2>
          <ul>
            {addresslist.map((address, idx) => {
              return (
                <li key={idx}>
                  <AddressCard address={{ ...address }} />
                </li>
              );
            })}
          </ul>
        </div>
        <img src={astronaut} alt="" className={s.astronaut__img} />
      </div>
    </>
  );
};
