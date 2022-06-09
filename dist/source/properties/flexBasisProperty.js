import { cssPropertyFactory } from '../helpers/cssProperty';
export const flexBasisProperty = (flexBasis, basis, defaultValue) => {
    const cssProp = cssPropertyFactory('flex-basis');
    if (flexBasis !== undefined)
        return cssProp(flexBasis);
    if (basis !== undefined)
        return cssProp(basis);
    if (defaultValue !== undefined)
        return cssProp(defaultValue);
    return {};
};
