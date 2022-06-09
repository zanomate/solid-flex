import { cssPropertyFactory } from '../helpers/cssProperty';
export const flexWrapProperty = (flexWrap, wrap, nowrap, wrapReverse, defaultValue) => {
    const cssProp = cssPropertyFactory('flex-wrap');
    if (flexWrap)
        return cssProp(flexWrap);
    if (wrap) {
        if (typeof wrap === 'string')
            return cssProp(wrap);
        if (typeof wrap === 'boolean')
            return cssProp(wrap ? 'wrap' : 'nowrap');
    }
    if (nowrap)
        return cssProp('nowrap');
    if (wrapReverse)
        return cssProp('wrap-reverse');
    if (defaultValue !== undefined)
        return cssProp(defaultValue);
    return {};
};
