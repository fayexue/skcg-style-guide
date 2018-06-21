import * as React from 'react';
import glamorous, { GlamorousComponent } from "glamorous";
import { Types } from "../../styles/Types";
import { Colors } from "../../styles/Colors";
import { MediaQueries } from "../../styles/MediaQueries";

export type HeadingInterface = GlamorousComponent<React.HTMLProps<HTMLHeadingElement>, {}>;

const Heading: HeadingInterface = glamorous.h2({
  ...Types.HeadingDesktop,

  color: Colors.SkCharcoal,
  textAlign: 'center',

  [MediaQueries.XsMax]: {
    ...Types.HeadingMobile,
  },
});

export default Heading;
