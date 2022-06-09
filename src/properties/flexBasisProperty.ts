import { JSX } from 'solid-js'
import { cssPropertyFactory } from '../helpers/cssProperty'
import { CssFlexBasis } from '../types/FlexibleItemProps'

export const flexBasisProperty = (
  flexBasis: CssFlexBasis | undefined,
  basis: CssFlexBasis | undefined,
  defaultValue?: CssFlexBasis,
): JSX.CSSProperties => {
  const cssProp = cssPropertyFactory('flex-basis')
  if (flexBasis !== undefined) return cssProp(flexBasis)
  if (basis !== undefined) return cssProp(basis)
  if (defaultValue !== undefined) return cssProp(defaultValue)
  return {}
}
