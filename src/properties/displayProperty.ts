import { JSX } from 'solid-js'
import { cssPropertyFactory } from '../helpers/cssProperty'
import { CssDisplay } from '../types/FlexibleContainerProps'

export const displayProperty = (
  display: CssDisplay | undefined,
  inline: boolean | undefined,
  defaultValue: CssDisplay,
): JSX.CSSProperties => {
  const cssProp = cssPropertyFactory('display')

  if (display) return cssProp(display)
  if (inline) return cssProp('inline-flex')
  if (defaultValue !== undefined) return cssProp(defaultValue)
  return {}
}
