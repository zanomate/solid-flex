import { cssPropertyFactory } from '../helpers/cssProperty';
export const flexDirectionProperty = (flexDirection, direction, row, col, column, rowReverse, colReverse, columnReverse, reverse, defaultValue) => {
    const cssProp = cssPropertyFactory('flex-direction');
    if (flexDirection)
        return cssProp(flexDirection);
    if (direction)
        return cssProp(direction);
    if (row)
        return cssProp(reverse ? 'row-reverse' : 'row');
    if (col)
        return cssProp(reverse ? 'column-reverse' : 'column');
    if (column)
        return cssProp(reverse ? 'column-reverse' : 'column');
    if (rowReverse)
        return cssProp(reverse ? 'row' : 'row-reverse');
    if (colReverse)
        return cssProp(reverse ? 'column' : 'column-reverse');
    if (columnReverse)
        return cssProp(reverse ? 'column' : 'column-reverse');
    if (defaultValue !== undefined)
        return cssProp(defaultValue);
    return {};
};
