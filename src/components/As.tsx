import { children, Component, JSX, mergeProps, ParentComponent, splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

export interface WithStyleProps {
  style?: JSX.CSSProperties;

  [key: string]: any
}

export interface WithAsProps {
  as?: Component<WithStyleProps> | string | keyof JSX.IntrinsicElements;
}

export interface AsProps extends WithAsProps, WithStyleProps {
  injectedStyle: JSX.CSSProperties;
}

export const As: ParentComponent<AsProps> = function (props) {
  const propsWithDefault = mergeProps(props, { as: 'div' })
  const [localProps, otherProps] = splitProps(propsWithDefault, [
    'children',
    'as',
    'injectedStyle',
    'style',
  ])

  const style = {
    // @ts-ignore
    ...localProps?.style,
    ...localProps.injectedStyle,
  }

  const c = children(() => localProps.children)

  // @ts-ignore
  return <Dynamic component={localProps.as} style={style} {...otherProps}>{c()}</Dynamic>
}
