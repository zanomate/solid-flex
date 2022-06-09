import { CssAlignSelf } from "../types/FlexibleItemProps";

export const alignSelfProperty = (
  alignSelf: CssAlignSelf | undefined,
  self: CssAlignSelf | undefined,
  selfStart: boolean | undefined,
  selfEnd: boolean | undefined,
  selfCenter: boolean | undefined,
  selfStretch: boolean | undefined,
  selfBaseline: boolean | undefined,
  defaultValue: CssAlignSelf
): CssAlignSelf => {
  if (alignSelf) return alignSelf;
  if (self) return self;
  if (selfStart) return "flex-start";
  if (selfEnd) return "flex-end";
  if (selfCenter) return "center";
  if (selfStretch) return "stretch";
  if (selfBaseline) return "baseline";
  return defaultValue;
};
