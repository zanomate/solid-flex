import { JSX } from 'solid-js'
import { cssPropertyFactory } from '../helpers/cssProperty'
import { CssFlexDirection } from '../types/FlexibleContainerProps'

export const flexDirectionProperty = (
  flexDirection: CssFlexDirection | undefined,
  direction: CssFlexDirection | undefined,
  row: boolean | undefined,
  col: boolean | undefined,
  column: boolean | undefined,
  rowReverse: boolean | undefined,
  colReverse: boolean | undefined,
  columnReverse: boolean | undefined,
  reverse: boolean | undefined,
  defaultValue?: CssFlexDirection,
): JSX.CSSProperties => {
  const cssProp = cssPropertyFactory('flex-direction')
  if (flexDirection) return cssProp(flexDirection)
  if (direction) return cssProp(direction)
  if (row) return cssProp(reverse ? 'row-reverse' : 'row')
  if (col) return cssProp(reverse ? 'column-reverse' : 'column')
  if (column) return cssProp(reverse ? 'column-reverse' : 'column')
  if (rowReverse) return cssProp(reverse ? 'row' : 'row-reverse')
  if (colReverse) return cssProp(reverse ? 'column' : 'column-reverse')
  if (columnReverse) return cssProp(reverse ? 'column' : 'column-reverse')
  if (defaultValue !== undefined) return cssProp(defaultValue)
  return {}
}
