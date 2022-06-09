import { CssFlexShrink } from "../types/FlexibleItemProps";

export const flexShrinkProperty = (
  flexShrink: CssFlexShrink | undefined,
  shrink: CssFlexShrink | boolean | undefined,
  defaultValue: CssFlexShrink
): CssFlexShrink => {
  if (flexShrink !== undefined) return flexShrink;
  if (shrink !== undefined) {
    if (typeof shrink === "boolean") return shrink ? 1 : 0;
    return shrink;
  }
  return defaultValue;
};
