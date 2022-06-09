export const flexShrinkProperty = (flexShrink, shrink, defaultValue) => {
    if (flexShrink !== undefined)
        return flexShrink;
    if (shrink !== undefined) {
        if (typeof shrink === "boolean")
            return shrink ? 1 : 0;
        return shrink;
    }
    return defaultValue;
};
