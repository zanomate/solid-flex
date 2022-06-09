import { JSX } from 'solid-js'
import { cssPropertyFactory } from '../helpers/cssProperty'
import { CssAlignItems } from '../types/FlexibleContainerProps'

export const alignItemsProperty = (
  alignItems: CssAlignItems | undefined,
  align: CssAlignItems | undefined,
  alignStart: boolean | undefined,
  alignEnd: boolean | undefined,
  alignCenter: boolean | undefined,
  stretch: boolean | undefined,
  alignStretch: boolean | undefined,
  baseline: boolean | undefined,
  alignBaseline: boolean | undefined,
  defaultValue?: CssAlignItems,
): JSX.CSSProperties => {
  const cssProp = cssPropertyFactory('align-items')

  if (alignItems) return cssProp(alignItems)
  if (align) return cssProp(align)
  if (alignStart) return cssProp('flex-start')
  if (alignEnd) return cssProp('flex-end')
  if (alignCenter) return cssProp('center')
  if (stretch) return cssProp('stretch')
  if (alignStretch) return cssProp('stretch')
  if (baseline) return cssProp('baseline')
  if (alignBaseline) return cssProp('baseline')
  if (defaultValue !== undefined) return cssProp(defaultValue)
  return {}
}
