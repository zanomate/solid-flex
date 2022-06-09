import { CssFlexWrap } from "../types/FlexibleContainerProps";

export const flexWrapProperty = (
  flexWrap: CssFlexWrap | undefined,
  wrap: CssFlexWrap | boolean | undefined,
  nowrap: boolean | undefined,
  wrapReverse: boolean | undefined,
  defaultValue: CssFlexWrap
): CssFlexWrap => {
  if (flexWrap) return flexWrap;
  if (wrap) {
    if (typeof wrap === "string") return wrap as CssFlexWrap;
    if (typeof wrap === "boolean") return wrap ? "wrap" : "nowrap";
  }
  if (nowrap) return "nowrap";
  if (wrapReverse) return "wrap-reverse";
  return defaultValue;
};
