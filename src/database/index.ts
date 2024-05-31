import { z } from "zod";
import { addressSchema } from "../components/forms/index.schema";

export type Address = z.infer<typeof addressSchema>;

export const addresslistDB: Address[] = [
  {
    id: "e725f7db-d460-4461-b379-537032caadf6",
    label: "Main House",
    fullName: "Bernardo Stein",
    phone: "51998488806",
    planet: "Earth",
    address: "T. Weibull st., 926",
    country: "BR",
    state: "RS",
    city: "Montenegro",
    zipCode: "92523870",
    coordinates: null,
  },
  {
    id: "9d48e12f-43e8-4798-9283-8325c7b9600e",
    label: "Summer House",
    fullName: "Bernardo Stein",
    phone: "51998488806",
    planet: "Mars",
    address: null,
    country: null,
    state: null,
    city: null,
    zipCode: null,
    coordinates: "0000",
  },
];