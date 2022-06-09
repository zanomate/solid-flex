import { cssPropertyFactory } from '../helpers/cssProperty';
export const justifyContentProperty = (justifyContent, justify, start, end, center, spaceBetween, spaceAround, spaceEvenly, defaultValue) => {
    const cssProp = cssPropertyFactory('justify-content');
    if (justifyContent)
        return cssProp(justifyContent);
    if (justify)
        return cssProp(justify);
    if (start)
        return cssProp('flex-start');
    if (end)
        return cssProp('flex-end');
    if (center)
        return cssProp('center');
    if (spaceBetween)
        return cssProp('space-between');
    if (spaceAround)
        return cssProp('space-around');
    if (spaceEvenly)
        return cssProp('space-evenly');
    if (defaultValue !== undefined)
        return cssProp(defaultValue);
    return {};
};
