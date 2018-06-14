import { Colors } from './../../styles/Colors';
import { Fonts } from './../../styles/Fonts';
import { Types } from "../../styles/Types";
import { css } from "glamor";
import { MediaQueries } from "../../styles/MediaQueries";
import { multiply } from '../../utils/helper';
import { Layout } from '../../styles/Layout';

const hero = css({
  fontSize: Fonts.Size.H1Desktop,
  fontWeight: Fonts.Weight.Normal,
  lineHeight: 1.2,
  [MediaQueries.XsMax]: {
    fontSize: Fonts.Size.H1,
    lineHeight: 1.3
  }
})

const heading = css({
  ...Types.HeadingDesktop,
  [MediaQueries.XsMax]: {
    ...Types.HeadingMobile
  }
})

const subheading = css({
  ...Types.Content
});

const small = css({
  ...Types.ContentDetail
})

const strong = css({
  fontWeight: Fonts.Weight.Bold
})

const info = css({
  color: Colors.SkcgBlue
})

const critical = css({
  color: Colors.SkcgGrape
})

const extraMargin = css({
  marginBottom: multiply(Layout.GridRowHeight, 2)
})

const styles = {
  hero,
  heading,
  subheading,
  small,
  strong,
  info,
  critical,
  extraMargin
}

export default styles;
