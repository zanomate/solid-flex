import { JSX } from "solid-js";

export type CssFlexOrder = JSX.CSSProperties["flex-order"];
export type CssFlexGrow = JSX.CSSProperties["flex-grow"];
export type CssFlexShrink = JSX.CSSProperties["flex-shrink"];
export type CssFlexBasis = JSX.CSSProperties["flex-basis"];
export type CssAlignSelf = JSX.CSSProperties["align-self"];

export interface FlexibleItemProps {
  // order
  order?: CssFlexOrder;
  // flex-grow
  flexGrow?: CssFlexGrow;
  grow?: CssFlexGrow | boolean;
  // flex-shrink
  flexShrink?: CssFlexShrink;
  shrink?: CssFlexShrink | boolean;
  // flex-basis
  flexBasis?: CssFlexBasis;
  basis?: CssFlexBasis;
  // align-self
  alignSelf?: CssAlignSelf;
  self?: CssAlignSelf;
  selfStart?: boolean;
  selfEnd?: boolean;
  selfCenter?: boolean;
  selfStretch?: boolean;
  selfBaseline?: boolean;
}
