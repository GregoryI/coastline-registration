import * as api from "../api";

export const SAVE_EMAILS = "save_emails";

export function saveEmails(emails) {
  return {
    type: SAVE_EMAILS,
    emails
  };
}

export function submitRegistration() {
  return function(dispatch, getState) {
    const state = getState();
    const { user, comapny, delivery, billing, invite } = state;

    return dispatch(() => api.submitRegistration(user, comapny, delivery, billing, invite))
      .then(json => {
        return json.success;
      });
  };
}
