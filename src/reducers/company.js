import { SAVE_COMPANY } from "../actions/company.js";

const initialState = {
  name: "",
  restaurant: "",
  role: "",
  type: "",
  phone: "",
  address: "",
};

// NOTE: USER_LOGOUT handled by root reducer
const user = (state=initialState, action) => {
  switch (action.type) {
    case SAVE_COMPANY:
      return action.company;
    default:
      return state;
  }
};

export default user;
