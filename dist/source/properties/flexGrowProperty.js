export const flexGrowProperty = (flexGrow, grow, defaultValue) => {
    if (flexGrow !== undefined)
        return flexGrow;
    if (grow !== undefined) {
        if (typeof grow === "boolean")
            return grow ? 1 : 0;
        return grow;
    }
    return defaultValue;
};
