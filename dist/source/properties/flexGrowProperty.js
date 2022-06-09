import { cssPropertyFactory } from '../helpers/cssProperty';
export const flexGrowProperty = (flexGrow, grow, defaultValue) => {
    const cssProp = cssPropertyFactory('flex-grow');
    if (flexGrow !== undefined)
        return cssProp(flexGrow);
    if (grow !== undefined) {
        if (typeof grow === 'boolean')
            return cssProp(grow ? 1 : 0);
        return cssProp(grow);
    }
    if (defaultValue !== undefined)
        return cssProp(defaultValue);
    return {};
};
