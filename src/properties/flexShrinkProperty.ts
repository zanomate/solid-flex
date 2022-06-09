import { JSX } from 'solid-js'
import { cssPropertyFactory } from '../helpers/cssProperty'
import { CssFlexShrink } from '../types/FlexibleItemProps'

export const flexShrinkProperty = (
  flexShrink: CssFlexShrink | undefined,
  shrink: CssFlexShrink | boolean | undefined,
  defaultValue?: CssFlexShrink,
): JSX.CSSProperties => {
  const cssProp = cssPropertyFactory('flex-shrink')
  if (flexShrink !== undefined) return cssProp(flexShrink)
  if (shrink !== undefined) {
    if (typeof shrink === 'boolean') return cssProp(shrink ? 1 : 0)
    return cssProp(shrink)
  }
  if (defaultValue !== undefined) return cssProp(defaultValue)
  return {}
}
