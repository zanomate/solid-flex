export const orderProperty = (order, defaultValue) => {
    if (order !== undefined)
        return order;
    return defaultValue;
};
