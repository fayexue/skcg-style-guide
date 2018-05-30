import * as glamor from 'glamor';
import { multiply, add } from '../../utils/helper';
import { padding } from 'polished';
import { CSSPropertiesRecursive } from 'glamorous/typings/css-properties';
import { Layout } from '../../styles/Layout';
import { Colors } from '../../styles/Colors';
import { MediaQueries } from '../../styles/MediaQueries';
import { Types } from '../../styles/Types';
import { Fonts } from '../../styles/Fonts';

const rootMargin = multiply(Layout.GridRowHeight, 3.2);
const rootMarginMobile = multiply(Layout.GridRowHeight, 2.5);

export const root: CSSPropertiesRecursive = {
  backgroundColor: Colors.SkWhite,
  maxWidth: Layout.GridContainerWidth,
  margin: `${rootMargin} auto`,
  paddingTop: multiply(Layout.GridRowHeight, 4),
  paddingBottom: multiply(Layout.GridRowHeight, 5),
  boxShadow: `0 1px 0 0 ${Colors.SkGreyMedium}`,

  [MediaQueries.XsMax]: {
    margin: `${rootMarginMobile} auto`,
    paddingTop: Layout.GridRowHeight,
    paddingBottom: multiply(Layout.GridRowHeight, 3),
  },

  '&:first-child': {
    marginTop: 0,
  },

  '&:last-child': {
    marginBottom: 0,
  }
}

export const dismissibleStyle: CSSPropertiesRecursive = {
  position: 'relative',
  transition: 'height 0.5s ease-out',
  overflow: 'hidden',
}

export const fullContentWidthStyle: CSSPropertiesRecursive = {
  paddingLeft: 0,
  paddingRight: 0,
}

export const fullContentHeightStyle: CSSPropertiesRecursive = {
  paddingTop: 0,
  paddingBottom: 0,
}

export const fullContentHeightBottomStyle: CSSPropertiesRecursive = {
  paddingBottom: 0,
}

export const noMarginTopStyle: CSSPropertiesRecursive = {
  marginTop: 0,
}

export const dismissCardButton: CSSPropertiesRecursive = {
  position: 'absolute',
  top: Layout.GridRowHeight,
  right: Layout.GridGutterWidth,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: Colors.SkBlue,
  border: `1px solid ${Colors.SkBlue}`,
  outline: 0,
  cursor: 'pointer',
  width: '2.5rem',
  height: '2.5rem',
  fontSize: '2.3rem',
  borderRadius: '50%',
  padding: 0,
  lineHeight: 1
};

export const headingContainer: CSSPropertiesRecursive = {
  padding: `0 0 ${multiply(Layout.GridRowHeight, 3.5)}`,

  [MediaQueries.XsMax]: {
    padding: `${multiply(Layout.GridRowHeight, 1.5)} ${Layout.GridGutterWidth} ${Layout.GridRowHeight}`,
    borderBottom: 'none',
  }
};

export const heading: CSSPropertiesRecursive = {
  ...Types.HeadingDesktop,

  color: Colors.SkCharcoal,
  maxWidth: Layout.GridContentWidth,
  textAlign: 'center',
  margin: '0 auto',
  padding: `${padding(0, Layout.GridGutterWidth)}`,

  [MediaQueries.XsMax]: {
    ...Types.HeadingMobile,
    padding: 0,
  },

  skeleton: {
    width: '33.33333%',
    backgroundColor: Colors.SkGreyLightest
  }
};

export const subheading: CSSPropertiesRecursive = {
  ...Types.Content,
  maxWidth: Layout.GridContentWidth,
  margin: `${multiply(Layout.GridRowHeight, 3.5)} auto 0`,
  textAlign: 'center',
  color: Colors.SkCharcoal,

  [MediaQueries.XsMax]: {
    marginTop: multiply(Layout.GridRowHeight, 2),
    marginBottom: Layout.GridRowHeight,
    lineHeight: 1.4
  }
}

export const noBorderBottomStyle: CSSPropertiesRecursive = {
  borderBottom: 0
};

export const content: CSSPropertiesRecursive = {
  maxWidth: add(Layout.GridContentWidth, multiply(Layout.GridGutterWidth, 4)),
  margin: '0 auto',

  [MediaQueries.XsMax]: {
    padding: `${Layout.GridRowHeight} ${Layout.GridGutterWidth} 0`,
  }
};

export const footerContainer: CSSPropertiesRecursive = {
  display: 'flex',
  maxWidth: Layout.GridContainerWidth,
  margin: `${multiply(Layout.GridRowHeight, -2)} auto (-${Layout.GridRowHeight})`,

  [MediaQueries.XsMax]: {
    marginTop: `-${Layout.GridRowHeight}`,
    marginBottom: Layout.GridRowHeight,
    marginLeft: Layout.GridGutterWidth,
    paddingBottom: 0
  }
};

export const extraMarginBottom: CSSPropertiesRecursive = {
  marginBottom: 70
};

export const footerStyle: CSSPropertiesRecursive = {
  fontSize: Fonts.Size.Detail,
  marginTop: 'auto',
  marginBottom: 'auto',
  color: Colors.SkGrey,

  [MediaQueries.XsMax]: {
    fontSize: '1.1rem',
    lineHeight: '2rem'
  }
};

export const info: CSSPropertiesRecursive = {
  paddingRight: '10px'
};

export const hidden: CSSPropertiesRecursive = {
  [MediaQueries.XsMax]: {
    display: 'none',
    visibility: 'hidden'
  }
};

const fadeInLoading = glamor.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

export const skeleton: CSSPropertiesRecursive = {
  margin: `${multiply(Layout.GridRowHeight, 2)} 0`,
  animation: `${fadeInLoading} ease-in 1`,
  animationDuration: '0.25s',
  '&:first-child': {
    marginTop: 0,
  },

  '&:last-child': {
    marginBottom: 0
  }
};
