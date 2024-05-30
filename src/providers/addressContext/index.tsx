import React, { ReactNode, createContext, useState } from "react";
import { Address } from "../../data";

type AddressProviderProps = {
  children: ReactNode;
};

export type AddressContextType = {
  editingAddress: Address | undefined;
  setEditingAddres: React.Dispatch<React.SetStateAction<Address | undefined>>;
};

export const AddressContext = createContext<AddressContextType | undefined>(
  undefined,
);

export const AddressProvider: React.FC<AddressProviderProps> = ({
  children,
}): JSX.Element => {
  const [editingAddress, setEditingAddres] = useState<Address | undefined>()

  return (
    <AddressContext.Provider value={{ setEditingAddres, editingAddress }}>
      {children}
    </AddressContext.Provider>
  );
};


