import { JSX, ParentComponent, splitProps } from 'solid-js'
import { alignContentProperty } from '../properties/alignContentProperty'
import { alignItemsProperty } from '../properties/alignItemsProperty'
import { alignSelfProperty } from '../properties/alignSelfProperty'
import { displayProperty } from '../properties/displayProperty'
import { flexBasisProperty } from '../properties/flexBasisProperty'
import { flexDirectionProperty } from '../properties/flexDirectionProperty'
import { flexGrowProperty } from '../properties/flexGrowProperty'
import { flexShrinkProperty } from '../properties/flexShrinkProperty'
import { flexWrapProperty } from '../properties/flexWrapProperty'
import { gapProperties } from '../properties/gap'
import { justifyContentProperty } from '../properties/justifyContentProperty'
import { orderProperty } from '../properties/orderProperty'
import { FlexibleContainerProps } from '../types/FlexibleContainerProps'
import { FlexibleItemProps } from '../types/FlexibleItemProps'
import { As, WithAsProps } from './As'

export interface FlexProps extends WithAsProps, FlexibleContainerProps, FlexibleItemProps {
}

export const Flex: ParentComponent<FlexProps> = function (props) {
  const [localProps, otherProps] = splitProps(props, [
    'display',
    'inline',
    'flexDirection',
    'direction',
    'row',
    'col',
    'column',
    'rowReverse',
    'colReverse',
    'columnReverse',
    'reverse',
    'flexWrap',
    'wrap',
    'nowrap',
    'wrapReverse',
    'justifyContent',
    'justify',
    'start',
    'end',
    'center',
    'spaceBetween',
    'spaceAround',
    'spaceEvenly',
    'alignItems',
    'align',
    'alignStart',
    'alignEnd',
    'alignCenter',
    'stretch',
    'alignStretch',
    'baseline',
    'alignBaseline',
    'alignContent',
    'contentStart',
    'contentEnd',
    'contentCenter',
    'contentStretch',
    'contentSpaceBetween',
    'contentSpaceAround',
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
    'gap',
    'rowGap',
    'columnGap',
    'colGap',
  ])

  const injectedStyle = (): JSX.CSSProperties => ({
    ...displayProperty(localProps.display, localProps.inline, 'flex'),
    ...flexDirectionProperty(localProps.flexDirection, localProps.direction, localProps.row, localProps.col, localProps.column, localProps.rowReverse, localProps.colReverse, localProps.columnReverse, localProps.reverse),
    ...flexWrapProperty(localProps.flexWrap, localProps.wrap, localProps.nowrap, localProps.wrapReverse),
    ...justifyContentProperty(localProps.justifyContent, localProps.justify, localProps.start, localProps.end, localProps.center, localProps.spaceBetween, localProps.spaceAround, localProps.spaceEvenly),
    ...alignItemsProperty(localProps.alignItems, localProps.align, localProps.alignStart, localProps.alignEnd, localProps.alignCenter, localProps.stretch, localProps.alignStretch, localProps.baseline, localProps.alignBaseline, 'center'),
    ...alignContentProperty(localProps.alignContent, localProps.contentStart, localProps.contentEnd, localProps.contentCenter, localProps.contentStretch, localProps.contentSpaceBetween, localProps.contentSpaceAround),
    ...gapProperties(localProps.rowGap, localProps.columnGap, localProps.colGap, localProps.gap, {}),
    ...orderProperty(localProps.order),
    ...flexGrowProperty(localProps.flexGrow, localProps.grow),
    ...flexShrinkProperty(localProps.flexShrink, localProps.shrink),
    ...flexBasisProperty(localProps.flexBasis, localProps.basis),
    ...alignSelfProperty(localProps.alignSelf, localProps.self, localProps.selfStart, localProps.selfEnd, localProps.selfCenter, localProps.selfStretch, localProps.selfBaseline),
  })

  return <As {...otherProps} injectedStyle={injectedStyle()} />
}
