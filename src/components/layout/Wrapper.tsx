import glamorous from 'glamorous';
import { Layout } from '../../styles/Layout';

/**
 * Globel wrapper has the max width defined for the whole site.
 */
export const Wrapper = glamorous.div({
  width: Layout.GridContainerWidth,
  margin: 'auto'
})