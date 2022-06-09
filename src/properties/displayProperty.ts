import { CssDisplay } from "../types/FlexibleContainerProps";

export const displayProperty = (
  display: CssDisplay | undefined,
  inline: boolean | undefined,
  defaultValue: CssDisplay
): CssDisplay => {
  if (display) return display;
  if (inline) return "inline-flex";
  return defaultValue;
};
