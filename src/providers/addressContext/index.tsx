import React, { ReactNode, createContext, useState } from "react";
import { Address, addresslistDB } from "../../database";

type AddressProviderProps = {
  children: ReactNode;
};

export type AddressContextType = {
  editingAddress: Address | undefined;
  setEditingAddres: React.Dispatch<React.SetStateAction<Address | undefined>>;
  addressList: Address[];
  setAddressList: React.Dispatch<React.SetStateAction<Address[]>>;
};

export const AddressContext = createContext<AddressContextType | undefined>( 
  undefined,
);

export const AddressProvider: React.FC<AddressProviderProps> = ({
  children,
}): JSX.Element => {

  const [editingAddress, setEditingAddres] = useState<Address | undefined>();
  
  const [addressList, setAddressList] = useState<Address[]>(addresslistDB);

  return (
    <AddressContext.Provider
      value={{ setEditingAddres, editingAddress, addressList, setAddressList }}
    >
      {children}
    </AddressContext.Provider>
  );
};
