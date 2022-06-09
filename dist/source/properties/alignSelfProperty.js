import { cssPropertyFactory } from '../helpers/cssProperty';
export const alignSelfProperty = (alignSelf, self, selfStart, selfEnd, selfCenter, selfStretch, selfBaseline, defaultValue) => {
    const cssProp = cssPropertyFactory('align-self');
    if (alignSelf)
        return cssProp(alignSelf);
    if (self)
        return cssProp(self);
    if (selfStart)
        return cssProp('flex-start');
    if (selfEnd)
        return cssProp('flex-end');
    if (selfCenter)
        return cssProp('center');
    if (selfStretch)
        return cssProp('stretch');
    if (selfBaseline)
        return cssProp('baseline');
    if (defaultValue !== undefined)
        return cssProp(defaultValue);
    return {};
};
