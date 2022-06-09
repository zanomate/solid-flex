import { JSX } from 'solid-js'
import { cssPropertyFactory } from '../helpers/cssProperty'
import { CssAlignSelf } from '../types/FlexibleItemProps'

export const alignSelfProperty = (
  alignSelf: CssAlignSelf | undefined,
  self: CssAlignSelf | undefined,
  selfStart: boolean | undefined,
  selfEnd: boolean | undefined,
  selfCenter: boolean | undefined,
  selfStretch: boolean | undefined,
  selfBaseline: boolean | undefined,
  defaultValue?: CssAlignSelf,
): JSX.CSSProperties => {
  const cssProp = cssPropertyFactory('align-self')
  if (alignSelf) return cssProp(alignSelf)
  if (self) return cssProp(self)
  if (selfStart) return cssProp('flex-start')
  if (selfEnd) return cssProp('flex-end')
  if (selfCenter) return cssProp('center')
  if (selfStretch) return cssProp('stretch')
  if (selfBaseline) return cssProp('baseline')
  if (defaultValue !== undefined) return cssProp(defaultValue)
  return {}
}
