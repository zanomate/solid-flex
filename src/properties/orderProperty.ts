import { JSX } from 'solid-js'
import { cssPropertyFactory } from '../helpers/cssProperty'
import { CssFlexOrder } from '../types/FlexibleItemProps'

export const orderProperty = (
  order: CssFlexOrder | undefined,
  defaultValue?: CssFlexOrder,
): JSX.CSSProperties => {
  const cssProp = cssPropertyFactory('order')
  if (order !== undefined) return cssProp(order)
  if (defaultValue !== undefined) return cssProp(defaultValue)
  return {}
}
