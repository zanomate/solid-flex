import { cssPropertyFactory } from '../helpers/cssProperty';
export const alignContentProperty = (alignContent, contentStart, contentEnd, contentCenter, contentStretch, contentSpaceBetween, contentSpaceAround, defaultValue) => {
    const cssProp = cssPropertyFactory('align-content');
    if (alignContent)
        return cssProp(alignContent);
    if (contentStart)
        return cssProp('flex-start');
    if (contentEnd)
        return cssProp('flex-end');
    if (contentCenter)
        return cssProp('center');
    if (contentStretch)
        return cssProp('stretch');
    if (contentSpaceBetween)
        return cssProp('space-between');
    if (contentSpaceAround)
        return cssProp('space-around');
    if (defaultValue)
        return cssProp(defaultValue);
    return {};
};
