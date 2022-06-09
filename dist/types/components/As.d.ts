import { Component, JSX, ParentComponent } from 'solid-js';
export interface WithStyleProps {
    style?: JSX.CSSProperties;
    [key: string]: any;
}
export interface WithAsProps {
    as?: Component<WithStyleProps> | string | keyof JSX.IntrinsicElements;
}
export interface AsProps extends WithAsProps, WithStyleProps {
    injectedStyle: JSX.CSSProperties;
}
export declare const As: ParentComponent<AsProps>;
