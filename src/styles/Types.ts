import { CSSPropertiesRecursive } from "glamorous/typings/css-properties";
import { Fonts } from "./Fonts";

const HeadingDesktop: CSSPropertiesRecursive = {
  fontSize: '2.6rem',
  lineHeight: 1.3,
  fontWeight: Fonts.Weight.Normal,
  letterSpacing: '-0.6px'
};

const HeadingMobile: CSSPropertiesRecursive = {
  fontSize: '2.1rem',
  lineHeight: 1.3,
  fontWeight: Fonts.Weight.Bold
};

const SectionHeadingDesktop: CSSPropertiesRecursive = {
  fontSize: '2.4rem',
  lineHeight: 1.6
};

const SectionHeadingMobile: CSSPropertiesRecursive = {
  fontSize: '2.1rem',
  lineHeight: 1.3
};

const SectionSubheadingDesktop: CSSPropertiesRecursive = {
  fontSize: '1.6rem',
  lineHeight: 1.3
};

const SectionSubheadingMobile: CSSPropertiesRecursive = {
  fontSize: '1.6rem',
  lineHeight: 1.4
};

const Content: CSSPropertiesRecursive = {
  fontSize: '1.6rem',
  lineHeight: 1.4,
  fontWeight: Fonts.Weight.Normal
};

const ListHeading: CSSPropertiesRecursive = {
  fontSize: '1.8rem',
  lineHeight: 1.2,
  letterSpacing: '-0.02rem',
  fontWeight: Fonts.Weight.Bold
};

const ContentDetail: CSSPropertiesRecursive = {
  fontSize: '1.4rem',
  lineHeight: 1.2
};

const Link: CSSPropertiesRecursive = {
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