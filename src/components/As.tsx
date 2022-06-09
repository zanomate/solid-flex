import { Component, JSX, mergeProps, ParentComponent, splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

export interface WithStyleProps {
  style?: JSX.CSSProperties;

  [key: string]: any
}

export interface WithAsProps extends WithStyleProps {
  as?: Component<WithStyleProps> | string | keyof JSX.IntrinsicElements;
}

export interface AsProps extends WithAsProps {
  injectedStyle: JSX.CSSProperties;
}

export const As: ParentComponent<AsProps> = (props) => {
  const propsWithDefault = mergeProps({ as: 'div' }, props)
  const [localProps, otherProps] = splitProps(propsWithDefault, [
    'children',
    'as',
    'injectedStyle',
    'style',
  ])

  const style = () => ({
    // @ts-ignore
    ...localProps?.style,
    ...localProps.injectedStyle,
  })

  // @ts-ignore
  return (
    <Dynamic
      component={localProps.as}
      style={style()}
      {...otherProps}
    >
      {localProps.children}
    </Dynamic>
  )
}
