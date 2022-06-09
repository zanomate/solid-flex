import { cssPropertyFactory } from '../helpers/cssProperty';
export const flexShrinkProperty = (flexShrink, shrink, defaultValue) => {
    const cssProp = cssPropertyFactory('flex-shrink');
    if (flexShrink !== undefined)
        return cssProp(flexShrink);
    if (shrink !== undefined) {
        if (typeof shrink === 'boolean')
            return cssProp(shrink ? 1 : 0);
        return cssProp(shrink);
    }
    if (defaultValue !== undefined)
        return cssProp(defaultValue);
    return {};
};
