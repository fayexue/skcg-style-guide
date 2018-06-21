import glamorous, { GlamorousComponent } from 'glamorous';
import { Layout } from '../../styles/Layout';

/**
 * Globel wrapper has the max width defined for the whole site.
 */

export type WrapperInterface = GlamorousComponent<React.HTMLProps<HTMLDivElement>, {}>

export const Wrapper: WrapperInterface = glamorous.div({
  width: Layout.GridContainerWidth,
  margin: 'auto'
})