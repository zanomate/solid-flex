import { CssFlexGrow } from "../types/FlexibleItemProps";

export const flexGrowProperty = (
  flexGrow: CssFlexGrow | undefined,
  grow: CssFlexGrow | boolean | undefined,
  defaultValue: CssFlexGrow
): CssFlexGrow => {
  if (flexGrow !== undefined) return flexGrow;
  if (grow !== undefined) {
    if (typeof grow === "boolean") return grow ? 1 : 0;
    return grow;
  }
  return defaultValue;
};
