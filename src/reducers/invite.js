import { SAVE_EMAILS } from "../actions/invite.js";

const initialState = { emails: ["", ""] };

// NOTE: USER_LOGOUT handled by root reducer
const invite = (state=initialState, action) => {
  switch (action.type) {
    case SAVE_EMAILS:
      return Object.assign(state, { emails: action.emails });
    default:
      return state;
  }
};

export default invite;
