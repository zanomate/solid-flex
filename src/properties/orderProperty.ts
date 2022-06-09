import { CssFlexOrder } from "../types/FlexibleItemProps";

export const orderProperty = (
  order: CssFlexOrder | undefined,
  defaultValue: CssFlexOrder
): CssFlexOrder => {
  if (order !== undefined) return order;
  return defaultValue;
};
