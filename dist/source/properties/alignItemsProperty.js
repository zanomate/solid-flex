export const alignItemsProperty = (alignItems, align, alignStart, alignEnd, alignCenter, stretch, alignStretch, baseline, alignBaseline, defaultValue) => {
    if (alignItems)
        return alignItems;
    if (align)
        return align;
    if (alignStart)
        return "flex-start";
    if (alignEnd)
        return "flex-end";
    if (alignCenter)
        return "center";
    if (stretch)
        return "stretch";
    if (alignStretch)
        return "stretch";
    if (baseline)
        return "baseline";
    if (alignBaseline)
        return "baseline";
    return defaultValue;
};
