import * as React from 'react';
import glamorous, { GlamorousComponent } from "glamorous";
import { Types } from "../../styles/Types";
import { Colors } from "../../styles/Colors";

export type SubheadingInterface = GlamorousComponent<React.HTMLProps<HTMLHeadingElement>, {}>;

const Subheading: SubheadingInterface = glamorous.h3({
  ...Types.Content,
  color: Colors.SkCharcoal,
  textAlign: 'center',
});

export default Subheading;
