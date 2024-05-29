import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa6";
import launchButton from "../../../assets/imgs/launch_button.webp";
import planets from "../../../assets/imgs/planets.webp";
import { StdInput, StdSelect } from "../inputs";
import { Planets, SelectOpts } from "../inputs/stdSelect";
import s from "./index.module.scss";

export const RegisterAdressForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    // formState: { isSubmitting, isValid },
  } = useForm();

  const submit = (data: unknown) => console.log(data);

  const planetOptions: SelectOpts[] = [
    { label: "Not selected", value: "not_selected" },
    { label: "Earth", value: "Earth" },
    { label: "Mars", value: "Mars" },
  ];

  const [selectedPlanet, setSelectedPLanet] = useState<Planets>("not_selected");

  return (
    <div className={s.form__container}>
      <div className={`align ${s.form__header}`}>
        <button aria-label="Return">
          <FaArrowLeft size={16} />
        </button>
        <h1 className="title3 bold ">Creating new address</h1>
      </div>
      <form onSubmit={handleSubmit(submit)} className={`align`}>
        <StdInput
          id="address_label"
          label="Address label"
          {...register("label")}
        />
        <div className={`${s.paralel__container}`}>
          <StdInput
            id="full_name"
            label="Full name"
            {...register("fullName")}
          />
          <StdInput
            id="phone_number"
            type="number"
            label="Mobile phone"
            {...register("phone")}
          />
        </div>
        <StdSelect
          id="planet_select"
          label="Planet"
          options={planetOptions}
          setSelectedPlanet={setSelectedPLanet}
          {...register("planet")}
        />
        {selectedPlanet === "not_selected" && (
          <img src={planets} className={`${s.planets__img}`} />
        )}
        {selectedPlanet === "Earth" && (
          <>
            <StdInput
              id="adress_line"
              label="Adress line"
              {...register("adress")}
            />
            <div className={`${s.paralel__container}`}>
              <StdInput id="country" label="Country" {...register("country")} />
              <StdInput id="state" label="State" {...register("state")} />
            </div>
            <div className={`${s.paralel__container}`}>
              <StdInput id="city" label="City" {...register("city")} />
              <StdInput
                id="zip_Code"
                type="number"
                label="Zip code"
                {...register("zipCode")}
              />
            </div>
          </>
        )}
        {selectedPlanet === "Mars" && (
          <>
            <StdInput
              id="coordinates"
              type="number"
              maxLength={4}
              label="Coordinates"
              {...register("coordinates")}
            />
          </>
        )}
        <button aria-label="Create adress">
          <img src={launchButton} alt="Launch button image" />
        </button>
      </form>
    </div>
  );
};
