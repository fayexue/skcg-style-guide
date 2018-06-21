import { Colors } from './../../styles/Colors';
import { Fonts } from './../../styles/Fonts';
import { Types } from "../../styles/Types";
import { css, StyleAttribute } from "glamor";
import { MediaQueries } from "../../styles/MediaQueries";
import { multiply } from '../../utils/helper';
import { Layout } from '../../styles/Layout';

const hero: StyleAttribute = css({
  fontSize: Fonts.Size.H1Desktop,
  fontWeight: Fonts.Weight.Normal,
  lineHeight: 1.2,
  [MediaQueries.XsMax]: {
    fontSize: Fonts.Size.H1,
    lineHeight: 1.3
  }
})

const heading: StyleAttribute = css({
  ...Types.HeadingDesktop,
  [MediaQueries.XsMax]: {
    ...Types.HeadingMobile
  }
})

const subheading: StyleAttribute = css({
  ...Types.Content
});

const small: StyleAttribute = css({
  ...Types.ContentDetail
})

const strong: StyleAttribute = css({
  fontWeight: Fonts.Weight.Bold
})

const info: StyleAttribute = css({
  color: Colors.SkcgBlue
})

const critical: StyleAttribute = css({
  color: Colors.SkcgGrape
})

const extraMargin: StyleAttribute = css({
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
