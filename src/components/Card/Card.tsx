import * as React from 'react';
import { Div, Button, H2, H3 } from 'glamorous';
import { root, fullContentWidthStyle, fullContentHeightStyle, noMarginTopStyle, dismissibleStyle, fullContentHeightBottomStyle, dismissCardButton, headingContainer, hidden, heading, subheading, content, noBorderBottomStyle, extraMarginBottom, footerContainer, info, footerStyle } from './cardStyles';
import { CloseIcon } from '../../assets/CloseIcon';
import { CSSPropertiesRecursive } from 'glamorous/typings/css-properties';
import { Colors } from '../../styles/Colors';

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  readonly title?: string,
  readonly subtitle?: string | React.ReactNode,
  readonly mobileTitleHidden?: boolean,
  readonly noBorderBottom?: boolean,
  readonly footer?: string,
  readonly className?: string,
  readonly fullContentWidth?: boolean,
  readonly fullContentHeight?: boolean,
  readonly fullContentHeightBottom?: boolean,
  readonly noMarginTop?: boolean,
  readonly bottomCard?: boolean,
  readonly dismissible?: boolean,
  readonly height?: number,
  onClose?(): void,
  readonly hideCloseButton?: boolean,
}

export const Card = (props: CardProps) => {
  const {
    children,
    title,
    subtitle,
    mobileTitleHidden,
    noBorderBottom,
    footer,
    fullContentWidth,
    fullContentHeight,
    fullContentHeightBottom,
    bottomCard,
    noMarginTop,
    dismissible,
    height,
    onClose,
    hideCloseButton,
    ...otherProps
  } = props;

  const css: CSSPropertiesRecursive = [
    root,
    fullContentWidth ? fullContentWidthStyle : {},
    fullContentHeight ? fullContentHeightStyle : {},
    fullContentHeightBottom ? fullContentHeightBottomStyle : {},
    noMarginTop ? noMarginTopStyle : {},
    dismissible ? dismissibleStyle : {}
  ];

  const headingClass: CSSPropertiesRecursive = [
    headingContainer,
    mobileTitleHidden ? hidden : {},
    noBorderBottom ? noBorderBottomStyle : {}
  ];

  const contentClass: CSSPropertiesRecursive = [
    content,
    fullContentWidth ? fullContentWidthStyle : {},
    fullContentHeight ? fullContentHeightStyle : {},
    noBorderBottom ? noBorderBottomStyle : {}
  ]

  const footerClass: CSSPropertiesRecursive = [
    footerContainer,
    bottomCard ? extraMarginBottom : {}
  ]

  return (
    <Div css={css} {...otherProps}>
      {(dismissible && !hideCloseButton) &&
        <Button css={dismissCardButton} onClick={onClose}>
          <CloseIcon fill={Colors.SkBlue} />
        </Button>
      }
      {(title || subtitle) &&
        <>
          <Div css={headingClass}>
            {title &&
              <H2 css={heading}>
                <div dangerouslySetInnerHTML={{ __html: title }} />
              </H2>
            }
            {subtitle &&
              <H3 css={subheading}>
                <div>{subtitle}</div>
              </H3>
            }
          </Div>
          <span key="spacer" />
        </>
      }
      <Div css={contentClass}>
        {children}
      </Div>
      {footer &&
        <Div css={footerClass}>
          <Div css={info} />
          <Div css={footerStyle}>
            {footer}
          </Div>
        </Div>
      }
    </Div>)
};
