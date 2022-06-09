export const alignSelfProperty = (alignSelf, self, selfStart, selfEnd, selfCenter, selfStretch, selfBaseline, defaultValue) => {
    if (alignSelf)
        return alignSelf;
    if (self)
        return self;
    if (selfStart)
        return "flex-start";
    if (selfEnd)
        return "flex-end";
    if (selfCenter)
        return "center";
    if (selfStretch)
        return "stretch";
    if (selfBaseline)
        return "baseline";
    return defaultValue;
};
