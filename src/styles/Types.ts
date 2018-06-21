import { CSSProperties } from "glamorous/typings/css-properties";
import { Fonts } from "./Fonts";

const HeadingDesktop: CSSProperties = {
  fontSize: '2.6rem',
  lineHeight: 1.3,
  fontWeight: Fonts.Weight.Normal,
  letterSpacing: '-0.6px'
};

const HeadingMobile: CSSProperties = {
  fontSize: '2.1rem',
  lineHeight: 1.3,
  fontWeight: Fonts.Weight.Bold
};

const SectionHeadingDesktop: CSSProperties = {
  fontSize: '2.4rem',
  lineHeight: 1.6
};

const SectionHeadingMobile: CSSProperties = {
  fontSize: '2.1rem',
  lineHeight: 1.3
};

const SectionSubheadingDesktop: CSSProperties = {
  fontSize: '1.6rem',
  lineHeight: 1.3
};

const SectionSubheadingMobile: CSSProperties = {
  fontSize: '1.6rem',
  lineHeight: 1.4
};

const Content: CSSProperties = {
  fontSize: '1.6rem',
  lineHeight: 1.4,
  fontWeight: Fonts.Weight.Normal
};

const ListHeading: CSSProperties = {
  fontSize: '1.8rem',
  lineHeight: 1.2,
  letterSpacing: '-0.02rem',
  fontWeight: Fonts.Weight.Bold
};

const ContentDetail: CSSProperties = {
  fontSize: '1.4rem',
  lineHeight: 1.2
};

const Link: CSSProperties = {
  color: '#06c',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline'
  }
};

export const Types = {
  HeadingDesktop,
  HeadingMobile,
  SectionHeadingDesktop,
  SectionHeadingMobile,
  SectionSubheadingDesktop,
  SectionSubheadingMobile,
  Content,
  ListHeading,
  ContentDetail,
  Link
};