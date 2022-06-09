import { CssFlexBasis } from "../types/FlexibleItemProps";

export const flexBasisProperty = (
  flexBasis: CssFlexBasis | undefined,
  basis: CssFlexBasis | undefined,
  defaultValue: CssFlexBasis
): CssFlexBasis => {
  if (flexBasis !== undefined) return flexBasis;
  if (basis !== undefined) return basis;
  return defaultValue;
};
