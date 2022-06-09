import { cssPropertyFactory } from '../helpers/cssProperty';
export const orderProperty = (order, defaultValue) => {
    const cssProp = cssPropertyFactory('order');
    if (order !== undefined)
        return cssProp(order);
    if (defaultValue !== undefined)
        return cssProp(defaultValue);
    return {};
};
