export const SAVE_COMPANY = "save_company";


export function saveCompany(
  name,
  restaurant,
  phone,
  address,
  role,
  type) {
  return {
    type: SAVE_COMPANY,
    company: {
      name,
      restaurant,
      phone,
      address,
      role,
      type
    }
  };
}
