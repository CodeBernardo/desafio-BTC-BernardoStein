import { useState } from "react";
import { useForm } from "react-hook-form";
import launchButton from "../../../assets/imgs/launch_button.webp";
import { StdInput, StdSelect } from "../inputs";
import { Planets, SelectOpts } from "../inputs/stdSelect";

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
    <div className="">
      <div  className="">
        <button aria-label="Return">{"<"}</button>
        <h1 className="">Address</h1>
      </div>
      <form onSubmit={handleSubmit(submit)} className="">
        <StdInput
          id="adress_label"
          label="Adress label"
          {...register("label")}
        />
        <StdInput id="full_name" label="Full name" {...register("fullName")} />
        <StdInput
          id="phone_number"
          type="number"
          label="Mobile Phone"
          {...register("phone")}
        />
        <StdSelect
          id="planet_select"
          label="Planet select"
          options={planetOptions}
          setSelectedPlanet={setSelectedPLanet}
          {...register("planet")}
        />
        {selectedPlanet === "not_selected" && <h2>Select a planet</h2>}
        {selectedPlanet === "Earth" && (
          <>
            <StdInput
              id="zip_Code"
              type="number"
              label="Zip code"
              {...register("zipCode")}
            />
            <StdInput
              id="adress_line"
              label="Adress line"
              {...register("adress")}
            />
            <StdInput id="country" label="Country" {...register("country")} />
            <StdInput id="state" label="State" {...register("state")} />
            <StdInput id="city" label="City" {...register("city")} />
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
