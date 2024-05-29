import { z } from "zod";

export const createAddressSchema = z
  .object({
    label: z.string().min(1, "Label field is required"),
    fullName: z.string().min(1, "Full name field is required"),
    phone: z.string().min(11, "Invalid phone format, must have 11 digits"),
    planet: z.string(),
    address: z
      .string()
      .min(1, "Address field is required")
      .nullish()
      .default(null),
    country: z
      .string()
      .min(2, "The Country code must have 2 digits")
      .nullish()
      .default(null),
    state: z
      .string()
      .min(2, "The State code must have 2 digits")
      .nullish()
      .default(null),
    city: z
      .string()
      .min(1, "The City field is required")
      .nullish()
      .default(null),
    zipCode: z
      .string()
      .min(7, "Zip code must have 7 digits")
      .nullish()
      .default(null),
    coordinates: z
      .string()
      .min(4, "Coordinates must have 4 digits")
      .nullish()
      .default(null),
  })
  .refine(
    ({ fullName }) => {
      const validated = fullName.split(" ");

      return validated.length >= 2;
    },
    { message: "Please provide first and last name", path: ["fullName"] },
  )
  .refine(({ planet }) => planet !== "not_selected");
