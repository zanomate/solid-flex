import { JSX } from 'solid-js'
import { cssPropertyFactory } from '../helpers/cssProperty'
import { CssAlignContent } from '../types/FlexibleContainerProps'

export const alignContentProperty = (
  alignContent: CssAlignContent | undefined,
  contentStart: boolean | undefined,
  contentEnd: boolean | undefined,
  contentCenter: boolean | undefined,
  contentStretch: boolean | undefined,
  contentSpaceBetween: boolean | undefined,
  contentSpaceAround: boolean | undefined,
  defaultValue?: CssAlignContent,
): JSX.CSSProperties => {
  const cssProp = cssPropertyFactory('align-content')

  if (alignContent) return cssProp(alignContent)
  if (contentStart) return cssProp('flex-start')
  if (contentEnd) return cssProp('flex-end')
  if (contentCenter) return cssProp('center')
  if (contentStretch) return cssProp('stretch')
  if (contentSpaceBetween) return cssProp('space-between')
  if (contentSpaceAround) return cssProp('space-around')
  if (defaultValue) return cssProp(defaultValue)
  return {}
}
