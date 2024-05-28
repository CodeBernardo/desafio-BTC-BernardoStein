import { StdInput } from "../inputs";

export const RegisterAdressForm = (): JSX.Element => {
  return (
    <form>
      <StdInput id="adress_label" label="Adress label" />
      <StdInput id="full_name" label="Full name" />
      <StdInput id="phone_number" type="number" label="Mobile Phone" />
      {/* PLanet choice input */}
      {/* if planet === earth */}
      <StdInput id="zip_Code" type="number" label="Zip code" />
      <StdInput id="adress_line" label="Adress line" />
      <StdInput id="Adress_label" label="Adress line" />
      <StdInput id="country" label="Country" />
      <StdInput id="state" label="State" />
      <StdInput id="city" label="City" />
      {/*  if planet === mars */}
      <StdInput id="coordinates" type="number" label="Coordinates" />
    </form>
  );
};
