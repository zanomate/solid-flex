export const flexWrapProperty = (flexWrap, wrap, nowrap, wrapReverse, defaultValue) => {
    if (flexWrap)
        return flexWrap;
    if (wrap) {
        if (typeof wrap === "string")
            return wrap;
        if (typeof wrap === "boolean")
            return wrap ? "wrap" : "nowrap";
    }
    if (nowrap)
        return "nowrap";
    if (wrapReverse)
        return "wrap-reverse";
    return defaultValue;
};
