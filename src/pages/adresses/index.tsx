import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { AddressCard } from "../../components/cards/addressCard";
import {
  AddressContext,
  AddressContextType,
} from "../../providers/addressContext";
import s from "./index.module.scss";

export const AddressesPage = (): JSX.Element => {
  const { addressList } = useContext(AddressContext) as AddressContextType;
  const navigate = useNavigate();

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
            <button
              className="text3 medium"
              onClick={() => navigate("/create")}
            >
              Add address
            </button>
          </div>
          <h2 className="text2 bold">Address list</h2>
          <ul>
            {addressList.map((address, idx) => {
              return (
                <li key={idx}>
                  <AddressCard data={{ ...address }} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
