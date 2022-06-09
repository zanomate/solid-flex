import { children, JSX, ParentComponent, splitProps } from 'solid-js'
import { alignSelfProperty } from '../properties/alignSelfProperty'
import { flexBasisProperty } from '../properties/flexBasisProperty'
import { flexGrowProperty } from '../properties/flexGrowProperty'
import { flexShrinkProperty } from '../properties/flexShrinkProperty'
import { orderProperty } from '../properties/orderProperty'
import { FlexibleItemProps } from '../types/FlexibleItemProps'
import { As, WithAsProps } from './As'

export interface FlexItemProps extends WithAsProps, FlexibleItemProps {
}

export const FlexItem: ParentComponent<FlexItemProps> = function (props) {
  const [localProps, otherProps] = splitProps(props, [
    'children',
    'order',
    'flexGrow',
    'grow',
    'flexShrink',
    'shrink',
    'flexBasis',
    'basis',
    'alignSelf',
    'self',
    'selfStart',
    'selfEnd',
    'selfCenter',
    'selfStretch',
    'selfBaseline',
  ])

  const injectedStyle: JSX.CSSProperties = {
    'order': orderProperty(localProps.order, 'unset'),
    'flex-grow': flexGrowProperty(localProps.flexGrow, localProps.grow, 'unset'),
    'flex-shrink': flexShrinkProperty(localProps.flexShrink, localProps.shrink, 'unset'),
    'flex-basis': flexBasisProperty(localProps.flexBasis, localProps.basis, 'unset'),
    'align-self': alignSelfProperty(localProps.alignSelf, localProps.self, localProps.selfStart, localProps.selfEnd, localProps.selfCenter, localProps.selfStretch, localProps.selfBaseline, 'unset'),
  }

  const c = children(() => props.children)

  return <As {...otherProps} injectedStyle={injectedStyle}>{c()}</As>
}
