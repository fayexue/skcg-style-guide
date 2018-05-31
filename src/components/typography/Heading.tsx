import glamorous from "glamorous";
import { Types } from "../../styles/Types";
import { Colors } from "../../styles/Colors";
import { MediaQueries } from "../../styles/MediaQueries";

export const Heading = glamorous.h2({
  ...Types.HeadingDesktop,

  color: Colors.SkCharcoal,
  textAlign: 'center',

  [MediaQueries.XsMax]: {
    ...Types.HeadingMobile,
  },
});
