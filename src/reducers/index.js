import { combineReducers } from "redux";

import user from "./user.js";
import company from "./company.js";
import delivery from "./delivery.js";
import billing from "./billing.js";
import invite from "./invite.js";


/*
 * To access the reducer in the redux state
 * object, use the name of the reducer as key..
 *
 * E.g. For "pagination":
 * >> combineReducers({ pagination });
 * >> state.pagination
 */
const appReducer = combineReducers({
  user,
  company,
  delivery,
  billing,
  invite
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
