import { JSX } from "solid-js";

export type CssDisplay = JSX.CSSProperties["display"];
export type CssFlexDirection = JSX.CSSProperties["flex-direction"];
export type CssFlexWrap = JSX.CSSProperties["flex-wrap"];
export type CssJustifyContent = JSX.CSSProperties["justify-content"];
export type CssAlignItems = JSX.CSSProperties["align-items"];
export type CssAlignContent = JSX.CSSProperties["align-content"];
export type CssGap = JSX.CSSWideKeyword | any;
export type CssRowGap = JSX.CSSWideKeyword | any;
export type CssColumnGap = JSX.CSSProperties["column-gap"];

export interface FlexibleContainerProps {
  // display
  display?: CssDisplay;
  inline?: boolean;
  // flex-direction
  flexDirection?: CssFlexDirection;
  direction?: CssFlexDirection;
  row?: boolean;
  col?: boolean;
  column?: boolean;
  rowReverse?: boolean;
  colReverse?: boolean;
  columnReverse?: boolean;
  reverse?: boolean;
  // flex-wrap
  flexWrap?: CssFlexWrap;
  wrap?: CssFlexWrap | boolean;
  nowrap?: boolean;
  wrapReverse?: boolean;
  // justify-content
  justifyContent?: CssJustifyContent;
  justify?: CssJustifyContent;
  start?: boolean;
  end?: boolean;
  center?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
  spaceEvenly?: boolean;
  // align-items
  alignItems?: CssAlignItems;
  align?: CssAlignItems;
  alignStart?: boolean;
  alignEnd?: boolean;
  alignCenter?: boolean;
  stretch?: boolean;
  alignStretch?: boolean;
  baseline?: boolean;
  alignBaseline?: boolean;
  // align-content
  alignContent?: CssAlignContent;
  contentStart?: boolean;
  contentEnd?: boolean;
  contentCenter?: boolean;
  contentStretch?: boolean;
  contentSpaceBetween?: boolean;
  contentSpaceAround?: boolean;
  // gap
  gap?: CssGap | CssGap[];
  // row-gap
  rowGap?: CssRowGap;
  // column-gap
  columnGap?: CssColumnGap;
  colGap?: CssColumnGap;
}
