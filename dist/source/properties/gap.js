export const rowGapProperty = (rowGap, defaultValue) => {
    if (rowGap)
        return rowGap;
    return defaultValue;
};
export const columnGapProperty = (columnGap, colGap, defaultValue) => {
    if (columnGap)
        return columnGap;
    if (colGap)
        return colGap;
    return defaultValue;
};
export const gapProperties = (rowGap, columnGap, colGap, gap, defaultPropertiesValues) => {
    let props = defaultPropertiesValues;
    props.rowGap = rowGapProperty(rowGap, undefined);
    props.columnGap = columnGapProperty(columnGap, colGap, undefined);
    if (gap) {
        if (Array.isArray(gap)) {
            props.rowGap = gap[0];
            props.columnGap = gap[1];
        }
        props.gap = gap;
    }
    return props;
};
