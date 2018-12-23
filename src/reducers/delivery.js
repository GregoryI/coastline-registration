import { SAVE_DELIVERY } from "../actions/delivery.js";

const initialState = {
  from: "",
  to: "",
  instructions: "",
};

// NOTE: USER_LOGOUT handled by root reducer
const user = (state=initialState, action) => {
  switch (action.type) {
    case SAVE_DELIVERY:
      return action.delivery;
    default:
      return state;
  }
};

export default user;
