import { children, mergeProps, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
export const As = function (props) {
    const propsWithDefault = mergeProps(props, { as: 'div' });
    const [localProps, otherProps] = splitProps(propsWithDefault, [
        'children',
        'as',
        'injectedStyle',
        'style',
    ]);
    const style = {
        // @ts-ignore
        ...localProps?.style,
        ...localProps.injectedStyle,
    };
    const c = children(() => localProps.children);
    // @ts-ignore
    return <Dynamic component={localProps.as} style={style} {...otherProps}>{c()}</Dynamic>;
};
