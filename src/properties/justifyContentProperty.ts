import { CssJustifyContent } from "../types/FlexibleContainerProps";

export const justifyContentProperty = (
  justifyContent: CssJustifyContent | undefined,
  justify: CssJustifyContent | undefined,
  start: boolean | undefined,
  end: boolean | undefined,
  center: boolean | undefined,
  spaceBetween: boolean | undefined,
  spaceAround: boolean | undefined,
  spaceEvenly: boolean | undefined,
  defaultValue: CssJustifyContent
): CssJustifyContent => {
  if (justifyContent) return justifyContent;
  if (justify) return justify;
  if (start) return "flex-start";
  if (end) return "flex-end";
  if (center) return "center";
  if (spaceBetween) return "space-between";
  if (spaceAround) return "space-around";
  if (spaceEvenly) return "space-evenly";
  return defaultValue;
};
