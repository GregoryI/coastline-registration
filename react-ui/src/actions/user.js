export const SAVE_USER = "save_user";


export function saveUser(email, password, confirm) {
  return {
    type: SAVE_USER,
    user: {
      email,
      password,
      confirm
    }
  };
}
