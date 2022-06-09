export const displayProperty = (display, inline, defaultValue) => {
    if (display)
        return display;
    if (inline)
        return "inline-flex";
    return defaultValue;
};
