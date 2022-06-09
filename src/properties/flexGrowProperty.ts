import { JSX } from 'solid-js'
import { cssPropertyFactory } from '../helpers/cssProperty'
import { CssFlexGrow } from '../types/FlexibleItemProps'

export const flexGrowProperty = (
  flexGrow: CssFlexGrow | undefined,
  grow: CssFlexGrow | boolean | undefined,
  defaultValue?: CssFlexGrow,
): JSX.CSSProperties => {
  const cssProp = cssPropertyFactory('flex-grow')
  if (flexGrow !== undefined) return cssProp(flexGrow)
  if (grow !== undefined) {
    if (typeof grow === 'boolean') return cssProp(grow ? 1 : 0)
    return cssProp(grow)
  }
  if (defaultValue !== undefined) return cssProp(defaultValue)
  return {}
}
