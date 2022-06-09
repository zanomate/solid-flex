import { JSX } from 'solid-js'
import { cssPropertyFactory } from '../helpers/cssProperty'
import { CssFlexWrap } from '../types/FlexibleContainerProps'

export const flexWrapProperty = (
  flexWrap: CssFlexWrap | undefined,
  wrap: CssFlexWrap | boolean | undefined,
  nowrap: boolean | undefined,
  wrapReverse: boolean | undefined,
  defaultValue?: CssFlexWrap,
): JSX.CSSProperties => {
  const cssProp = cssPropertyFactory('flex-wrap')

  if (flexWrap) return cssProp(flexWrap)
  if (wrap) {
    if (typeof wrap === 'string') return cssProp(wrap as CssFlexWrap)
    if (typeof wrap === 'boolean') return cssProp(wrap ? 'wrap' : 'nowrap')
  }
  if (nowrap) return cssProp('nowrap')
  if (wrapReverse) return cssProp('wrap-reverse')
  if (defaultValue !== undefined) return cssProp(defaultValue)
  return {}
}
