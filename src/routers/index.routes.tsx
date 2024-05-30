import { Route, Routes } from "react-router-dom";
import { AddressesPage } from "../pages/adresses";
import { CreateAddressPage } from "../pages/registerAddress";
import { EditAddressPAge } from "../pages/editAdresses";

export const MainRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<AddressesPage/>}/>
      <Route path="/create" element={<CreateAddressPage/>}/>
      <Route path="/edit" element={<EditAddressPAge/>}/>
      <Route path="*" element={<AddressesPage/>}/>
    </Routes>
  );
}