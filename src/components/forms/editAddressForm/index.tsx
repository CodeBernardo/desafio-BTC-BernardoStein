import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa6";
import { IoRocketSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import astronaut from "../../../assets/imgs/astronauta_2.png";
import planets from "../../../assets/imgs/planets.webp";
import { Address } from "../../../database";
import {
  AddressContext,
  AddressContextType,
} from "../../../providers/addressContext";
import { addressSchema } from "../index.schema";
import { StdInput, StdSelect } from "../inputs";
import { Planets, SelectOpts } from "../inputs/stdSelect";
import s from "./index.module.scss";

export const EditAdressForm = (): JSX.Element => {
  const { editingAddress, addressList } = useContext(
    AddressContext,
  ) as AddressContextType;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Address>({
    resolver: zodResolver(addressSchema),
    defaultValues: { ...editingAddress },
  });

  const planetOptions: SelectOpts[] = [
    { label: "Not selected", value: "not_selected" },
    { label: "Earth", value: "Earth" },
    { label: "Mars", value: "Mars" },
  ];

  const [selectedPlanet, setSelectedPLanet] = useState<Planets>(
    editingAddress?.planet as Planets,
  );

  const submit: SubmitHandler<Address> = (payload: Address) => {
    const addressFound = addressList.findIndex(
      (address) => address.id === payload.id,
    );
    addressList[addressFound] = { ...payload };
    reset();
    navigate("/");
  };

  return (
    <div className={s.form__container}>
      <div className={`align ${s.form__header}`}>
        <button aria-label="Return" onClick={() => navigate("/")}>
          <FaArrowLeft size={16} />
        </button>
        <h1 className="title3 bold ">Editing address</h1>
      </div>
      <form onSubmit={handleSubmit(submit)} className={`align`}>
        <div>
          <StdInput
            id="address_label"
            label="Address label"
            {...register("label")}
            placeholder="Home"
            error={errors.label}
          />
          <div className={`${s.paralel__container}`}>
            <StdInput
              id="full_name"
              label="Full name"
              {...register("fullName")}
              placeholder="Jhon Doe"
              error={errors.fullName}
            />
            <StdInput
              id="phone_number"
              type="number"
              label="Mobile phone"
              {...register("phone")}
              placeholder="00-00000-0000"
              error={errors.phone}
            />
          </div>
          <StdSelect
            id="planet_select"
            label="Planet"
            options={planetOptions}
            setSelectedPlanet={setSelectedPLanet}
            {...register("planet")}
            disabled
          />
          {selectedPlanet === "not_selected" && (
            <img src={planets} className={`${s.planets__img}`} />
          )}
          {selectedPlanet === "Earth" && (
            <>
              <StdInput
                id="adress_line"
                label="Adress line"
                {...register("address")}
                placeholder="Random street, 123"
                error={errors.address}
              />
              <div className={`${s.paralel__container}`}>
                <StdInput
                  id="country"
                  label="Country"
                  {...register("country")}
                  placeholder="Us"
                  error={errors.country}
                />
                <StdInput
                  id="state"
                  label="State"
                  {...register("state")}
                  placeholder="CA"
                  error={errors.state}
                />
              </div>
              <div className={`${s.paralel__container}`}>
                <StdInput
                  id="city"
                  label="City"
                  {...register("city")}
                  placeholder="Sacramento"
                  error={errors.city}
                />
                <StdInput
                  id="zip_Code"
                  type="number"
                  label="Zip code"
                  {...register("zipCode")}
                  placeholder="0000-000"
                  error={errors.zipCode}
                />
              </div>
            </>
          )}
          {selectedPlanet === "Mars" && (
            <>
              <StdInput
                id="coordinates"
                type="number"
                label="Coordinates"
                {...register("coordinates")}
                placeholder="0000"
                error={errors.coordinates}
              />
            </>
          )}
          <div className={s.buttons__container}>
            <button
              aria-label="Create adress"
              className={`text2 medium ${!isValid ? s.not__visible : ""} ${
                s.submit__button
              }`}
            >
              <IoRocketSharp size={20} /> Save changes
            </button>
            <button
              className={`text2 medium ${s.submit__button}`}
              aria-label="Cancel"
              onClick={() => navigate("/")}
            >
              Discard changes
            </button>
          </div>
        </div>
        <img src={astronaut} alt="Image of astronaut" className={s.astronaut} />
      </form>
    </div>
  );
};
