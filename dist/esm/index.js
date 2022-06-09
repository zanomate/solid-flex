import { createComponent, Dynamic, mergeProps as mergeProps$1 } from 'solid-js/web';
import { mergeProps, splitProps } from 'solid-js';

const As = props => {
  const propsWithDefault = mergeProps({
    as: 'div'
  }, props);
  const [localProps, otherProps] = splitProps(propsWithDefault, ['children', 'as', 'injectedStyle', 'style']);

  const style = () => ({ // @ts-ignore
    ...(localProps === null || localProps === void 0 ? void 0 : localProps.style),
    ...localProps.injectedStyle
  }); // @ts-ignore


  return createComponent(Dynamic, mergeProps$1({
    get component() {
      return localProps.as;
    },

    get style() {
      return style();
    }

  }, otherProps, {
    get children() {
      return localProps.children;
    }

  }));
};

const cssPropertyFactory = name => value => ({
  [name]: value
});

const alignContentProperty = (alignContent, contentStart, contentEnd, contentCenter, contentStretch, contentSpaceBetween, contentSpaceAround, defaultValue) => {
  const cssProp = cssPropertyFactory('align-content');
  if (alignContent) return cssProp(alignContent);
  if (contentStart) return cssProp('flex-start');
  if (contentEnd) return cssProp('flex-end');
  if (contentCenter) return cssProp('center');
  if (contentStretch) return cssProp('stretch');
  if (contentSpaceBetween) return cssProp('space-between');
  if (contentSpaceAround) return cssProp('space-around');
  if (defaultValue) return cssProp(defaultValue);
  return {};
};

const alignItemsProperty = (alignItems, align, alignStart, alignEnd, alignCenter, stretch, alignStretch, baseline, alignBaseline, defaultValue) => {
  const cssProp = cssPropertyFactory('align-items');
  if (alignItems) return cssProp(alignItems);
  if (align) return cssProp(align);
  if (alignStart) return cssProp('flex-start');
  if (alignEnd) return cssProp('flex-end');
  if (alignCenter) return cssProp('center');
  if (stretch) return cssProp('stretch');
  if (alignStretch) return cssProp('stretch');
  if (baseline) return cssProp('baseline');
  if (alignBaseline) return cssProp('baseline');
  if (defaultValue !== undefined) return cssProp(defaultValue);
  return {};
};

const alignSelfProperty = (alignSelf, self, selfStart, selfEnd, selfCenter, selfStretch, selfBaseline, defaultValue) => {
  const cssProp = cssPropertyFactory('align-self');
  if (alignSelf) return cssProp(alignSelf);
  if (self) return cssProp(self);
  if (selfStart) return cssProp('flex-start');
  if (selfEnd) return cssProp('flex-end');
  if (selfCenter) return cssProp('center');
  if (selfStretch) return cssProp('stretch');
  if (selfBaseline) return cssProp('baseline');
  if (defaultValue !== undefined) return cssProp(defaultValue);
  return {};
};

const displayProperty = (display, inline, defaultValue) => {
  const cssProp = cssPropertyFactory('display');
  if (display) return cssProp(display);
  if (inline) return cssProp('inline-flex');
  if (defaultValue !== undefined) return cssProp(defaultValue);
  return {};
};

const flexBasisProperty = (flexBasis, basis, defaultValue) => {
  const cssProp = cssPropertyFactory('flex-basis');
  if (flexBasis !== undefined) return cssProp(flexBasis);
  if (basis !== undefined) return cssProp(basis);
  if (defaultValue !== undefined) return cssProp(defaultValue);
  return {};
};

const flexDirectionProperty = (flexDirection, direction, row, col, column, rowReverse, colReverse, columnReverse, reverse, defaultValue) => {
  const cssProp = cssPropertyFactory('flex-direction');
  if (flexDirection) return cssProp(flexDirection);
  if (direction) return cssProp(direction);
  if (row) return cssProp(reverse ? 'row-reverse' : 'row');
  if (col) return cssProp(reverse ? 'column-reverse' : 'column');
  if (column) return cssProp(reverse ? 'column-reverse' : 'column');
  if (rowReverse) return cssProp(reverse ? 'row' : 'row-reverse');
  if (colReverse) return cssProp(reverse ? 'column' : 'column-reverse');
  if (columnReverse) return cssProp(reverse ? 'column' : 'column-reverse');
  if (defaultValue !== undefined) return cssProp(defaultValue);
  return {};
};

const flexGrowProperty = (flexGrow, grow, defaultValue) => {
  const cssProp = cssPropertyFactory('flex-grow');
  if (flexGrow !== undefined) return cssProp(flexGrow);

  if (grow !== undefined) {
    if (typeof grow === 'boolean') return cssProp(grow ? 1 : 0);
    return cssProp(grow);
  }

  if (defaultValue !== undefined) return cssProp(defaultValue);
  return {};
};

const flexShrinkProperty = (flexShrink, shrink, defaultValue) => {
  const cssProp = cssPropertyFactory('flex-shrink');
  if (flexShrink !== undefined) return cssProp(flexShrink);

  if (shrink !== undefined) {
    if (typeof shrink === 'boolean') return cssProp(shrink ? 1 : 0);
    return cssProp(shrink);
  }

  if (defaultValue !== undefined) return cssProp(defaultValue);
  return {};
};

const flexWrapProperty = (flexWrap, wrap, nowrap, wrapReverse, defaultValue) => {
  const cssProp = cssPropertyFactory('flex-wrap');
  if (flexWrap) return cssProp(flexWrap);

  if (wrap) {
    if (typeof wrap === 'string') return cssProp(wrap);
    if (typeof wrap === 'boolean') return cssProp(wrap ? 'wrap' : 'nowrap');
  }

  if (nowrap) return cssProp('nowrap');
  if (wrapReverse) return cssProp('wrap-reverse');
  if (defaultValue !== undefined) return cssProp(defaultValue);
  return {};
};

const rowGapProperty = (rowGap, defaultValue) => {
  if (rowGap) return rowGap;
  return defaultValue;
};
const columnGapProperty = (columnGap, colGap, defaultValue) => {
  if (columnGap) return columnGap;
  if (colGap) return colGap;
  return defaultValue;
};
const gapProperties = (rowGap, columnGap, colGap, gap, defaultPropertiesValues) => {
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

const justifyContentProperty = (justifyContent, justify, start, end, center, spaceBetween, spaceAround, spaceEvenly, defaultValue) => {
  const cssProp = cssPropertyFactory('justify-content');
  if (justifyContent) return cssProp(justifyContent);
  if (justify) return cssProp(justify);
  if (start) return cssProp('flex-start');
  if (end) return cssProp('flex-end');
  if (center) return cssProp('center');
  if (spaceBetween) return cssProp('space-between');
  if (spaceAround) return cssProp('space-around');
  if (spaceEvenly) return cssProp('space-evenly');
  if (defaultValue !== undefined) return cssProp(defaultValue);
  return {};
};

const orderProperty = (order, defaultValue) => {
  const cssProp = cssPropertyFactory('order');
  if (order !== undefined) return cssProp(order);
  if (defaultValue !== undefined) return cssProp(defaultValue);
  return {};
};

const Flex = function (props) {
  const [localProps, otherProps] = splitProps(props, ['display', 'inline', 'flexDirection', 'direction', 'row', 'col', 'column', 'rowReverse', 'colReverse', 'columnReverse', 'reverse', 'flexWrap', 'wrap', 'nowrap', 'wrapReverse', 'justifyContent', 'justify', 'start', 'end', 'center', 'spaceBetween', 'spaceAround', 'spaceEvenly', 'alignItems', 'align', 'alignStart', 'alignEnd', 'alignCenter', 'stretch', 'alignStretch', 'baseline', 'alignBaseline', 'alignContent', 'contentStart', 'contentEnd', 'contentCenter', 'contentStretch', 'contentSpaceBetween', 'contentSpaceAround', 'order', 'flexGrow', 'grow', 'flexShrink', 'shrink', 'flexBasis', 'basis', 'alignSelf', 'self', 'selfStart', 'selfEnd', 'selfCenter', 'selfStretch', 'selfBaseline', 'gap', 'rowGap', 'columnGap', 'colGap']);

  const injectedStyle = () => ({ ...displayProperty(localProps.display, localProps.inline, 'flex'),
    ...flexDirectionProperty(localProps.flexDirection, localProps.direction, localProps.row, localProps.col, localProps.column, localProps.rowReverse, localProps.colReverse, localProps.columnReverse, localProps.reverse),
    ...flexWrapProperty(localProps.flexWrap, localProps.wrap, localProps.nowrap, localProps.wrapReverse),
    ...justifyContentProperty(localProps.justifyContent, localProps.justify, localProps.start, localProps.end, localProps.center, localProps.spaceBetween, localProps.spaceAround, localProps.spaceEvenly),
    ...alignItemsProperty(localProps.alignItems, localProps.align, localProps.alignStart, localProps.alignEnd, localProps.alignCenter, localProps.stretch, localProps.alignStretch, localProps.baseline, localProps.alignBaseline, 'center'),
    ...alignContentProperty(localProps.alignContent, localProps.contentStart, localProps.contentEnd, localProps.contentCenter, localProps.contentStretch, localProps.contentSpaceBetween, localProps.contentSpaceAround),
    ...gapProperties(localProps.rowGap, localProps.columnGap, localProps.colGap, localProps.gap, {}),
    ...orderProperty(localProps.order),
    ...flexGrowProperty(localProps.flexGrow, localProps.grow),
    ...flexShrinkProperty(localProps.flexShrink, localProps.shrink),
    ...flexBasisProperty(localProps.flexBasis, localProps.basis),
    ...alignSelfProperty(localProps.alignSelf, localProps.self, localProps.selfStart, localProps.selfEnd, localProps.selfCenter, localProps.selfStretch, localProps.selfBaseline)
  });

  return createComponent(As, mergeProps$1(otherProps, {
    get injectedStyle() {
      return injectedStyle();
    }

  }));
};

const FlexItem = props => {
  const [localProps, otherProps] = splitProps(props, ['children', 'order', 'flexGrow', 'grow', 'flexShrink', 'shrink', 'flexBasis', 'basis', 'alignSelf', 'self', 'selfStart', 'selfEnd', 'selfCenter', 'selfStretch', 'selfBaseline']);

  const injectedStyle = () => ({ ...orderProperty(localProps.order),
    ...flexGrowProperty(localProps.flexGrow, localProps.grow),
    ...flexShrinkProperty(localProps.flexShrink, localProps.shrink),
    ...flexBasisProperty(localProps.flexBasis, localProps.basis),
    ...alignSelfProperty(localProps.alignSelf, localProps.self, localProps.selfStart, localProps.selfEnd, localProps.selfCenter, localProps.selfStretch, localProps.selfBaseline)
  });

  return createComponent(As, mergeProps$1({
    get injectedStyle() {
      return injectedStyle();
    }

  }, otherProps, {
    get children() {
      return localProps.children;
    }

  }));
};

export { As, Flex, FlexItem };
//# sourceMappingURL=index.js.map
