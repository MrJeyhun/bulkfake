import { RegionCode, Regions } from "@app/types/enums";
import { faker } from "@faker-js/faker";

export const createFakeData = (
  id: string,
  fullName: string,
  address: string,
  phone: string
) => {
  return {
    id: id,
    fullName,
    address,
    phone,
  };
};
