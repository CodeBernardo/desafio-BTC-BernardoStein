import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import earthImg from "../../../assets/imgs/earth.png";
import marsImg from "../../../assets/imgs/mars.png";
import { Address } from "../../../database";
import {
  AddressContext,
  AddressContextType,
} from "../../../providers/addressContext";
import s from "./index.module.scss";

interface AddressCardProps {
  data: Address;
}

export const AddressCard: React.FC<AddressCardProps> = ({
  data,
}): JSX.Element => {
  const navigate = useNavigate();
  
  const { setEditingAddres, addressList, setAddressList } = useContext(
    AddressContext,
  ) as AddressContextType;

  const handleEditAddress = (data: Address): void => {
    setEditingAddres(data);
    navigate("/edit");
  };

  const deleteAddress = (id: string) => {
    const newAddressList = addressList.filter((address) => address.id !== id);
    setAddressList(newAddressList);
  };

  return (
    <>
      <div className={`${s.card__container}`}>
        <img
          src={data.planet === "Earth" ? earthImg : marsImg}
          alt="Planet img"
        />
        <div className={s.infos__container}>
          <p className={`bold ${s.card__label}`}>{data.label}</p>
          <h2 className="text1 bold">{data.fullName}</h2>
          <p className="text2 medium">{data.phone}</p>
          {data.planet === "Earth" ? (
            <small
              className={s.address__info}
            >{`${data.address} - ${data.city} / ${data.zipCode} - ${data.state} / ${data.country}`}</small>
          ) : (
            <small
              className={s.address__info}
            >{`Sector - ${data.coordinates}`}</small>
          )}
          <div className={s.buttons__container}>
            <button className="bold" onClick={() => handleEditAddress(data)}>
              Edit address
            </button>
            <button className="bold" onClick={() => deleteAddress(data.id)}>
              Delete address
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
