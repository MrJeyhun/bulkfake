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
