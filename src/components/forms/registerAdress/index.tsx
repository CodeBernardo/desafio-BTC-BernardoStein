import { useState } from "react";
import { StdInput, StdSelect } from "../inputs";
import { Planets, SelectOpts } from "../inputs/stdSelect";
import launchButton from "../../../assets/imgs/launch_button.webp"

export const RegisterAdressForm = (): JSX.Element => {

  const planetOptions: SelectOpts[] = [
    { label: "Not selected", value: "not_selected" },
    { label: "Earth", value: "Earth" },
    { label: "Mars", value: "Mars" },
  ];

  const [selectedPlanet, setSelectedPLanet] = useState<Planets>("not_selected");

  return (
    <>
      <button aria-label="Return">{"<"}</button>
      <h1>Adress</h1>
      <form>
        <StdInput id="adress_label" label="Adress label" />
        <StdInput id="full_name" label="Full name" />
        <StdInput id="phone_number" type="number" label="Mobile Phone" />
        <StdSelect
          id="planet_select"
          label="Planet select"
          options={planetOptions}
          setSelectedPlanet={setSelectedPLanet}
        />
        {selectedPlanet === "not_selected" && <h2>Select a planet</h2>}
        {selectedPlanet === "Earth" && (
          <>
            <StdInput id="zip_Code" type="number" label="Zip code" />
            <StdInput id="adress_line" label="Adress line" />
            <StdInput id="Adress_label" label="Adress line" />
            <StdInput id="country" label="Country" />
            <StdInput id="state" label="State" />
            <StdInput id="city" label="City" />
          </>
        )}
        {selectedPlanet === "Mars" && (
          <>
            <StdInput
              id="coordinates"
              type="number"
              maxLength={4}
              label="Coordinates"
            />
          </>
        )}
        <button aria-label="Create adress"><img src={launchButton} alt="Launch Button  image" /></button>
      </form>
    </>
  );
};
