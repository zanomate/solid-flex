import { cssPropertyFactory } from '../helpers/cssProperty';
export const displayProperty = (display, inline, defaultValue) => {
    const cssProp = cssPropertyFactory('display');
    if (display)
        return cssProp(display);
    if (inline)
        return cssProp('inline-flex');
    if (defaultValue !== undefined)
        return cssProp(defaultValue);
    return {};
};
