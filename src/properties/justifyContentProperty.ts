import { JSX } from 'solid-js'
import { cssPropertyFactory } from '../helpers/cssProperty'
import { CssJustifyContent } from '../types/FlexibleContainerProps'

export const justifyContentProperty = (
  justifyContent: CssJustifyContent | undefined,
  justify: CssJustifyContent | undefined,
  start: boolean | undefined,
  end: boolean | undefined,
  center: boolean | undefined,
  spaceBetween: boolean | undefined,
  spaceAround: boolean | undefined,
  spaceEvenly: boolean | undefined,
  defaultValue?: CssJustifyContent,
): JSX.CSSProperties => {
  const cssProp = cssPropertyFactory('justify-content')

  if (justifyContent) return cssProp(justifyContent)
  if (justify) return cssProp(justify)
  if (start) return cssProp('flex-start')
  if (end) return cssProp('flex-end')
  if (center) return cssProp('center')
  if (spaceBetween) return cssProp('space-between')
  if (spaceAround) return cssProp('space-around')
  if (spaceEvenly) return cssProp('space-evenly')
  if (defaultValue !== undefined) return cssProp(defaultValue)
  return {}
}
