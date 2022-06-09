export const flexDirectionProperty = (flexDirection, direction, row, col, column, rowReverse, colReverse, columnReverse, reverse, defaultValue) => {
    if (flexDirection)
        return flexDirection;
    if (direction)
        return direction;
    if (row)
        return reverse ? "row-reverse" : "row";
    if (col)
        return reverse ? "column-reverse" : "column";
    if (column)
        return reverse ? "column-reverse" : "column";
    if (rowReverse)
        return reverse ? "row" : "row-reverse";
    if (colReverse)
        return reverse ? "column" : "column-reverse";
    if (columnReverse)
        return reverse ? "column" : "column-reverse";
    return defaultValue;
};
