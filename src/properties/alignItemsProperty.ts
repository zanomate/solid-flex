import { CssAlignItems } from "../types/FlexibleContainerProps";

export const alignItemsProperty = (
  alignItems: CssAlignItems | undefined,
  align: CssAlignItems | undefined,
  alignStart: boolean | undefined,
  alignEnd: boolean | undefined,
  alignCenter: boolean | undefined,
  stretch: boolean | undefined,
  alignStretch: boolean | undefined,
  baseline: boolean | undefined,
  alignBaseline: boolean | undefined,
  defaultValue: CssAlignItems
): CssAlignItems => {
  if (alignItems) return alignItems;
  if (align) return align;
  if (alignStart) return "flex-start";
  if (alignEnd) return "flex-end";
  if (alignCenter) return "center";
  if (stretch) return "stretch";
  if (alignStretch) return "stretch";
  if (baseline) return "baseline";
  if (alignBaseline) return "baseline";
  return defaultValue;
};
