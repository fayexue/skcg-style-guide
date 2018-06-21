import * as React from 'react';
import { Div } from "glamorous";
import { css } from "glamor";
import styles from './textStyles';
import { Types } from '../../styles/Types';

export interface TextProps extends React.HTMLProps<HTMLDivElement> {
  // typography
  hero?: boolean
  heading?: boolean
  subheading?: boolean
  small?: boolean
  // font weight
  strong?: boolean
  // color
  info?: boolean
  critical?: boolean
  // special cases
  isLast?: boolean
}

const Text = (props: TextProps) => {
  const {
    hero,
    heading,
    subheading,
    small,
    strong,
    info,
    critical,
    isLast
  } = props;

  const textStyles = css(
    Types.Content,
    hero && styles.hero,
    heading && styles.heading,
    subheading && styles.subheading,
    small && styles.small,
    strong && styles.strong,
    info && styles.info,
    critical && styles.critical,
    isLast && styles.extraMargin
  )
  return <Div css={textStyles}>{props.children}</Div>
}

export default Text;
