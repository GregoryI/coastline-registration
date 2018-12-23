import { SAVE_BILLING } from "../actions/billing.js";

import { PAYMENT_METHODS } from "../util/registrationSelectOptions.js";

const initialState = {
  payment: PAYMENT_METHODS[0].value,
  terms: "",
  accountingEmail: "",
  institution: "",
  branchAddress: "",
  accountNumber: "",
  transitNumber: "",
  cardNumber: "",
  nameOnCard: "",
  expiry: "",
  cvc: ""
};

// NOTE: USER_LOGOUT handled by root reducer
const user = (state=initialState, action) => {
  switch (action.type) {
    case SAVE_BILLING:
      return Object.assign(state, action.billing);
    default:
      return state;
  }
};

export default user;
