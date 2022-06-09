export const justifyContentProperty = (justifyContent, justify, start, end, center, spaceBetween, spaceAround, spaceEvenly, defaultValue) => {
    if (justifyContent)
        return justifyContent;
    if (justify)
        return justify;
    if (start)
        return "flex-start";
    if (end)
        return "flex-end";
    if (center)
        return "center";
    if (spaceBetween)
        return "space-between";
    if (spaceAround)
        return "space-around";
    if (spaceEvenly)
        return "space-evenly";
    return defaultValue;
};
