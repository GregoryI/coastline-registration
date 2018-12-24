export const SAVE_EMAILS = "save_emails";


export function saveEmails(emails) {
  return {
    type: SAVE_EMAILS,
    emails
  };
}
