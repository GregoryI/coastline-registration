export const SAVE_BILLING = "save_billing";


export function saveBilling(billingObject) {
  return {
    type: SAVE_BILLING,
    billing: billingObject
  };
}
