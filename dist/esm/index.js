import { createComponent, Dynamic, mergeProps as mergeProps$1, template } from 'solid-js/web';
import { mergeProps, splitProps, children, createSignal, createEffect, createMemo } from 'solid-js';

const As = function (props) {
  const propsWithDefault = mergeProps(props, {
    as: 'div'
  });
  const [localProps, otherProps] = splitProps(propsWithDefault, ['children', 'as', 'injectedStyle', 'style']);
  const style = { // @ts-ignore
    ...(localProps === null || localProps === void 0 ? void 0 : localProps.style),
    ...localProps.injectedStyle
  };
  const c = children(() => localProps.children); // @ts-ignore

  return createComponent(Dynamic, mergeProps$1({
    get component() {
      return localProps.as;
    },

    style: style
  }, otherProps, {
    get children() {
      return c();
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
  if (alignItems) return alignItems;
  if (align) return align;
  if (alignStart) return "flex-start";
  if (alignEnd) return "flex-end";
  if (alignCenter) return "center";
  if (stretch) return "stretch";
  if (alignStretch) return "stretch";
  if (baseline) return "baseline";
  if (alignBaseline) return "baseline";
  return defaultValue;
};

const alignSelfProperty = (alignSelf, self, selfStart, selfEnd, selfCenter, selfStretch, selfBaseline, defaultValue) => {
  if (alignSelf) return alignSelf;
  if (self) return self;
  if (selfStart) return "flex-start";
  if (selfEnd) return "flex-end";
  if (selfCenter) return "center";
  if (selfStretch) return "stretch";
  if (selfBaseline) return "baseline";
  return defaultValue;
};

const displayProperty = (display, inline, defaultValue) => {
  if (display) return display;
  if (inline) return "inline-flex";
  return defaultValue;
};

const flexBasisProperty = (flexBasis, basis, defaultValue) => {
  if (flexBasis !== undefined) return flexBasis;
  if (basis !== undefined) return basis;
  return defaultValue;
};

const flexDirectionProperty = (flexDirection, direction, row, col, column, rowReverse, colReverse, columnReverse, reverse, defaultValue) => {
  if (flexDirection) return flexDirection;
  if (direction) return direction;
  if (row) return reverse ? "row-reverse" : "row";
  if (col) return reverse ? "column-reverse" : "column";
  if (column) return reverse ? "column-reverse" : "column";
  if (rowReverse) return reverse ? "row" : "row-reverse";
  if (colReverse) return reverse ? "column" : "column-reverse";
  if (columnReverse) return reverse ? "column" : "column-reverse";
  return defaultValue;
};

const flexGrowProperty = (flexGrow, grow, defaultValue) => {
  if (flexGrow !== undefined) return flexGrow;

  if (grow !== undefined) {
    if (typeof grow === "boolean") return grow ? 1 : 0;
    return grow;
  }

  return defaultValue;
};

const flexShrinkProperty = (flexShrink, shrink, defaultValue) => {
  if (flexShrink !== undefined) return flexShrink;

  if (shrink !== undefined) {
    if (typeof shrink === "boolean") return shrink ? 1 : 0;
    return shrink;
  }

  return defaultValue;
};

const flexWrapProperty = (flexWrap, wrap, nowrap, wrapReverse, defaultValue) => {
  if (flexWrap) return flexWrap;

  if (wrap) {
    if (typeof wrap === "string") return wrap;
    if (typeof wrap === "boolean") return wrap ? "wrap" : "nowrap";
  }

  if (nowrap) return "nowrap";
  if (wrapReverse) return "wrap-reverse";
  return defaultValue;
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
  if (justifyContent) return justifyContent;
  if (justify) return justify;
  if (start) return "flex-start";
  if (end) return "flex-end";
  if (center) return "center";
  if (spaceBetween) return "space-between";
  if (spaceAround) return "space-around";
  if (spaceEvenly) return "space-evenly";
  return defaultValue;
};

const orderProperty = (order, defaultValue) => {
  if (order !== undefined) return order;
  return defaultValue;
};

const Flex = function (props) {
  const [localProps, otherProps] = splitProps(props, ['display', 'inline', 'flexDirection', 'direction', 'row', 'col', 'column', 'rowReverse', 'colReverse', 'columnReverse', 'reverse', 'flexWrap', 'wrap', 'nowrap', 'wrapReverse', 'justifyContent', 'justify', 'start', 'end', 'center', 'spaceBetween', 'spaceAround', 'spaceEvenly', 'alignItems', 'align', 'alignStart', 'alignEnd', 'alignCenter', 'stretch', 'alignStretch', 'baseline', 'alignBaseline', 'alignContent', 'contentStart', 'contentEnd', 'contentCenter', 'contentStretch', 'contentSpaceBetween', 'contentSpaceAround', 'order', 'flexGrow', 'grow', 'flexShrink', 'shrink', 'flexBasis', 'basis', 'alignSelf', 'self', 'selfStart', 'selfEnd', 'selfCenter', 'selfStretch', 'selfBaseline', 'gap', 'rowGap', 'columnGap', 'colGap']);
  const [foo] = createSignal(0);
  createEffect(() => {
    console.log(localProps, foo());
  });
  const injectedStyle = createMemo(() => ({
    display: displayProperty(localProps.display, localProps.inline, 'flex'),
    flexDirection: flexDirectionProperty(localProps.flexDirection, localProps.direction, localProps.row, localProps.col, localProps.column, localProps.rowReverse, localProps.colReverse, localProps.columnReverse, localProps.reverse, 'unset'),
    flexWrap: flexWrapProperty(localProps.flexWrap, localProps.wrap, localProps.nowrap, localProps.wrapReverse, 'unset'),
    justifyContent: justifyContentProperty(localProps.justifyContent, localProps.justify, localProps.start, localProps.end, localProps.center, localProps.spaceBetween, localProps.spaceAround, localProps.spaceEvenly, 'unset'),
    alignItems: alignItemsProperty(localProps.alignItems, localProps.align, localProps.alignStart, localProps.alignEnd, localProps.alignCenter, localProps.stretch, localProps.alignStretch, localProps.baseline, localProps.alignBaseline, 'center'),
    ...alignContentProperty(localProps.alignContent, localProps.contentStart, localProps.contentEnd, localProps.contentCenter, localProps.contentStretch, localProps.contentSpaceBetween, localProps.contentSpaceAround, 'unset'),
    ...gapProperties(localProps.rowGap, localProps.columnGap, localProps.colGap, localProps.gap, {}),
    order: orderProperty(localProps.order, 'unset'),
    flexGrow: flexGrowProperty(localProps.flexGrow, localProps.grow, 'unset'),
    flexShrink: flexShrinkProperty(localProps.flexShrink, localProps.shrink, 'unset'),
    flexBasis: flexBasisProperty(localProps.flexBasis, localProps.basis, 'unset'),
    alignSelf: alignSelfProperty(localProps.alignSelf, localProps.self, localProps.selfStart, localProps.selfEnd, localProps.selfCenter, localProps.selfStretch, localProps.selfBaseline, 'unset')
  }));
  return createComponent(As, mergeProps$1(otherProps, {
    injectedStyle: injectedStyle
  }));
};

const FlexItem = function (props) {
  const [localProps, otherProps] = splitProps(props, ['children', 'order', 'flexGrow', 'grow', 'flexShrink', 'shrink', 'flexBasis', 'basis', 'alignSelf', 'self', 'selfStart', 'selfEnd', 'selfCenter', 'selfStretch', 'selfBaseline']);
  const injectedStyle = {
    'order': orderProperty(localProps.order, 'unset'),
    'flex-grow': flexGrowProperty(localProps.flexGrow, localProps.grow, 'unset'),
    'flex-shrink': flexShrinkProperty(localProps.flexShrink, localProps.shrink, 'unset'),
    'flex-basis': flexBasisProperty(localProps.flexBasis, localProps.basis, 'unset'),
    'align-self': alignSelfProperty(localProps.alignSelf, localProps.self, localProps.selfStart, localProps.selfEnd, localProps.selfCenter, localProps.selfStretch, localProps.selfBaseline, 'unset')
  };
  const c = children(() => props.children);
  return createComponent(As, mergeProps$1(otherProps, {
    injectedStyle: injectedStyle,

    get children() {
      return c();
    }

  }));
};

const _tmpl$ = /*#__PURE__*/template(`<div>Hello World!</div>`, 2);

const Foo = () => {
  return _tmpl$.cloneNode(true);
};

export { As, Flex, FlexItem, Foo };
//# sourceMappingURL=index.js.map
