import { ParentComponent } from 'solid-js';
import { FlexibleContainerProps } from '../types/FlexibleContainerProps';
import { FlexibleItemProps } from '../types/FlexibleItemProps';
import { WithAsProps } from './As';
export interface FlexProps extends WithAsProps, FlexibleContainerProps, FlexibleItemProps {
}
export declare const Flex: ParentComponent<FlexProps>;
