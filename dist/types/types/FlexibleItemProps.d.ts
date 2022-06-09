import { JSX } from "solid-js";
export declare type CssFlexOrder = JSX.CSSProperties["flex-order"];
export declare type CssFlexGrow = JSX.CSSProperties["flex-grow"];
export declare type CssFlexShrink = JSX.CSSProperties["flex-shrink"];
export declare type CssFlexBasis = JSX.CSSProperties["flex-basis"];
export declare type CssAlignSelf = JSX.CSSProperties["align-self"];
export interface FlexibleItemProps {
    order?: CssFlexOrder;
    flexGrow?: CssFlexGrow;
    grow?: CssFlexGrow | boolean;
    flexShrink?: CssFlexShrink;
    shrink?: CssFlexShrink | boolean;
    flexBasis?: CssFlexBasis;
    basis?: CssFlexBasis;
    alignSelf?: CssAlignSelf;
    self?: CssAlignSelf;
    selfStart?: boolean;
    selfEnd?: boolean;
    selfCenter?: boolean;
    selfStretch?: boolean;
    selfBaseline?: boolean;
}
