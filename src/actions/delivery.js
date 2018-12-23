export const SAVE_DELIVERY = "save_delivery";


export function saveDelivery(from, to, instructions) {
  return {
    type: SAVE_DELIVERY,
    delivery: {
      from,
      to,
      instructions
    }
  };
}
