import { mergeProps, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
export const As = (props) => {
    const propsWithDefault = mergeProps({ as: 'div' }, props);
    const [localProps, otherProps] = splitProps(propsWithDefault, [
        'children',
        'as',
        'injectedStyle',
        'style',
    ]);
    const style = () => ({
        // @ts-ignore
        ...localProps?.style,
        ...localProps.injectedStyle,
    });
    // @ts-ignore
    return (<Dynamic component={localProps.as} style={style()} {...otherProps}>
      {localProps.children}
    </Dynamic>);
};
