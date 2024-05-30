import { z } from "zod";
import { addressSchema } from "../components/forms/index.schema";

export type Address = z.infer<typeof addressSchema>;

export const addresslist: Address[] = [
  {
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
