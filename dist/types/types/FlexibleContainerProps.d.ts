import { JSX } from "solid-js";
export declare type CssDisplay = JSX.CSSProperties["display"];
export declare type CssFlexDirection = JSX.CSSProperties["flex-direction"];
export declare type CssFlexWrap = JSX.CSSProperties["flex-wrap"];
export declare type CssJustifyContent = JSX.CSSProperties["justify-content"];
export declare type CssAlignItems = JSX.CSSProperties["align-items"];
export declare type CssAlignContent = JSX.CSSProperties["align-content"];
export declare type CssGap = JSX.CSSWideKeyword | any;
export declare type CssRowGap = JSX.CSSWideKeyword | any;
export declare type CssColumnGap = JSX.CSSProperties["column-gap"];
export interface FlexibleContainerProps {
    display?: CssDisplay;
    inline?: boolean;
    flexDirection?: CssFlexDirection;
    direction?: CssFlexDirection;
    row?: boolean;
    col?: boolean;
    column?: boolean;
    rowReverse?: boolean;
    colReverse?: boolean;
    columnReverse?: boolean;
    reverse?: boolean;
    flexWrap?: CssFlexWrap;
    wrap?: CssFlexWrap | boolean;
    nowrap?: boolean;
    wrapReverse?: boolean;
    justifyContent?: CssJustifyContent;
    justify?: CssJustifyContent;
    start?: boolean;
    end?: boolean;
    center?: boolean;
    spaceBetween?: boolean;
    spaceAround?: boolean;
    spaceEvenly?: boolean;
    alignItems?: CssAlignItems;
    align?: CssAlignItems;
    alignStart?: boolean;
    alignEnd?: boolean;
    alignCenter?: boolean;
    stretch?: boolean;
    alignStretch?: boolean;
    baseline?: boolean;
    alignBaseline?: boolean;
    alignContent?: CssAlignContent;
    contentStart?: boolean;
    contentEnd?: boolean;
    contentCenter?: boolean;
    contentStretch?: boolean;
    contentSpaceBetween?: boolean;
    contentSpaceAround?: boolean;
    gap?: CssGap | CssGap[];
    rowGap?: CssRowGap;
    columnGap?: CssColumnGap;
    colGap?: CssColumnGap;
}
