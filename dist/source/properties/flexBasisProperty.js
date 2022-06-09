export const flexBasisProperty = (flexBasis, basis, defaultValue) => {
    if (flexBasis !== undefined)
        return flexBasis;
    if (basis !== undefined)
        return basis;
    return defaultValue;
};
