import { cssPropertyFactory } from '../helpers/cssProperty';
export const alignItemsProperty = (alignItems, align, alignStart, alignEnd, alignCenter, stretch, alignStretch, baseline, alignBaseline, defaultValue) => {
    const cssProp = cssPropertyFactory('align-items');
    if (alignItems)
        return cssProp(alignItems);
    if (align)
        return cssProp(align);
    if (alignStart)
        return cssProp('flex-start');
    if (alignEnd)
        return cssProp('flex-end');
    if (alignCenter)
        return cssProp('center');
    if (stretch)
        return cssProp('stretch');
    if (alignStretch)
        return cssProp('stretch');
    if (baseline)
        return cssProp('baseline');
    if (alignBaseline)
        return cssProp('baseline');
    if (defaultValue !== undefined)
        return cssProp(defaultValue);
    return {};
};
