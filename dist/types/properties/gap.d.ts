import { JSX } from "solid-js";
import { CssColumnGap, CssGap, CssRowGap } from "../types/FlexibleContainerProps";
export declare const rowGapProperty: (rowGap: CssRowGap | undefined, defaultValue: CssRowGap) => CssRowGap;
export declare const columnGapProperty: (columnGap: CssColumnGap | undefined, colGap: CssColumnGap | undefined, defaultValue: CssColumnGap) => CssColumnGap;
export declare const gapProperties: (rowGap: CssRowGap | undefined, columnGap: CssColumnGap | undefined, colGap: CssColumnGap | undefined, gap: CssGap | CssGap[] | undefined, defaultPropertiesValues: JSX.CSSProperties) => JSX.CSSProperties;
