import { SAVE_USER } from "../actions/user.js";

const initialState = {
  email: "",
  password: "",
  confirm: "",
};

// NOTE: USER_LOGOUT handled by root reducer
const user = (state=initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default user;
