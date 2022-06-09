import { JSX } from "solid-js";
import { CssColumnGap, CssGap, CssRowGap } from "../types/FlexibleContainerProps";

export const rowGapProperty = (
  rowGap: CssRowGap | undefined,
  defaultValue: CssRowGap
): CssRowGap => {
  if (rowGap) return rowGap;
  return defaultValue;
};

export const columnGapProperty = (
  columnGap: CssColumnGap | undefined,
  colGap: CssColumnGap | undefined,
  defaultValue: CssColumnGap
): CssColumnGap => {
  if (columnGap) return columnGap;
  if (colGap) return colGap;
  return defaultValue;
};

export const gapProperties = (
  rowGap: CssRowGap | undefined,
  columnGap: CssColumnGap | undefined,
  colGap: CssColumnGap | undefined,
  gap: CssGap | CssGap[] | undefined,
  defaultPropertiesValues: JSX.CSSProperties
): JSX.CSSProperties => {
  let props: JSX.CSSProperties = defaultPropertiesValues;
  props.rowGap = rowGapProperty(rowGap, undefined);
  props.columnGap = columnGapProperty(columnGap, colGap, undefined);

  if (gap) {
    if (Array.isArray(gap)) {
      props.rowGap = gap[0];
      props.columnGap = gap[1];
    }
    props.gap = gap as CssGap;
  }

  return props;
};
