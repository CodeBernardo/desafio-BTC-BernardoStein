import React from "react";
import earthImg from "../../../assets/imgs/earth.png";
import marsImg from "../../../assets/imgs/mars.png";
import { Address } from "../../../data";
import s from "./index.module.scss";

interface AddressCardProps {
  address: Address;
}

export const AddressCard: React.FC<AddressCardProps> = ({
  address,
}): JSX.Element => {
  return (
    <>
      <div className={`${s.card__container}`}>
        <img
          src={address.planet === "Earth" ? earthImg : marsImg}
          alt="Planet img"
        />
        <div className={s.infos__container}>
          <p className={`bold ${s.card__label}`}>{address.label}</p>
          <h2 className="text1 bold">{address.fullName}</h2>
          <p className="text2 medium">{address.phone}</p>
          {address.planet === "Earth" ? (
            <small
              className={s.address__info}
            >{`${address.address} - ${address.city} / ${address.zipCode} - ${address.state} / ${address.country}`}</small>
          ) : (
            <small
              className={s.address__info}
            >{`Sector - ${address.coordinates}`}</small>
          )}
          <div className={s.buttons__container}>
            <button className="bold">Edit address</button>
            <button className="bold">Delete address</button>
          </div>
        </div>
      </div>
    </>
  );
};
