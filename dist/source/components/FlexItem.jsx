import { splitProps } from 'solid-js';
import { alignSelfProperty } from '../properties/alignSelfProperty';
import { flexBasisProperty } from '../properties/flexBasisProperty';
import { flexGrowProperty } from '../properties/flexGrowProperty';
import { flexShrinkProperty } from '../properties/flexShrinkProperty';
import { orderProperty } from '../properties/orderProperty';
import { As } from './As';
export const FlexItem = (props) => {
    const [localProps, otherProps] = splitProps(props, [
        'children',
        'order',
        'flexGrow',
        'grow',
        'flexShrink',
        'shrink',
        'flexBasis',
        'basis',
        'alignSelf',
        'self',
        'selfStart',
        'selfEnd',
        'selfCenter',
        'selfStretch',
        'selfBaseline',
    ]);
    const injectedStyle = () => ({
        ...orderProperty(localProps.order),
        ...flexGrowProperty(localProps.flexGrow, localProps.grow),
        ...flexShrinkProperty(localProps.flexShrink, localProps.shrink),
        ...flexBasisProperty(localProps.flexBasis, localProps.basis),
        ...alignSelfProperty(localProps.alignSelf, localProps.self, localProps.selfStart, localProps.selfEnd, localProps.selfCenter, localProps.selfStretch, localProps.selfBaseline),
    });
    return (<As injectedStyle={injectedStyle()} {...otherProps}>
      {localProps.children}
    </As>);
};
