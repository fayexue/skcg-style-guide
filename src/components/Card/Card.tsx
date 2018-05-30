import * as React from 'react';
import { Div, Button, H2, H3 } from 'glamorous';
import { CloseIcon } from '../../assets/CloseIcon';
import { CSSPropertiesRecursive } from 'glamorous/typings/css-properties';
import { Colors } from '../../styles/Colors';
import styles from './cardStyles';
import { InfoIcon } from '../../assets/InfoIcon';

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  readonly title?: string,
  readonly subtitle?: string | React.ReactNode,
  readonly mobileTitleHidden?: boolean,
  readonly footer?: string,
  readonly fullWidth?: boolean,
  readonly fullHeight?: boolean,
  readonly noPaddingBottom?: boolean,
  readonly noMarginTop?: boolean,
  readonly isBottom?: boolean,
  readonly dismissible?: boolean,
  onClose?(): void,
}

interface CardState {
  readonly height: number | undefined
}

export class Card extends React.Component<CardProps, CardState> {
  private cardRef: HTMLDivElement | null = null;

  constructor(props) {
    super(props);
    this.state = { height: undefined };
  }

  componentDidMount() {
    this.getCardHeight();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.getCardHeight();
    }
  }

  private getCardHeight = () => {
    if (this.cardRef) {
      this.setState({ height: this.cardRef.clientHeight });
    }
  }

  private onHide = () => {
    this.setState({ height: 0 });
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    const {
      children,
      title,
      subtitle,
      mobileTitleHidden,
      footer,
      fullWidth,
      fullHeight,
      noPaddingBottom,
      isBottom,
      noMarginTop,
      dismissible,
      onClose,
      ...otherProps
    } = this.props;

    const cardContainer: CSSPropertiesRecursive = [
      styles.cardContainer,
      noMarginTop ? styles.noMarginTop : {},
    ];

    const card: CSSPropertiesRecursive = [
      styles.card,
      fullWidth ? styles.fullWidth : {},
      fullHeight ? styles.fullHeight : {},
      noPaddingBottom ? styles.noPaddingBottom : {},
      dismissible ? styles.dismissible : {}
    ];

    const headingClass: CSSPropertiesRecursive = [
      styles.headingContainer,
      mobileTitleHidden ? styles.hidden : {}
    ];

    const contentClass: CSSPropertiesRecursive = [
      styles.content,
      fullWidth ? styles.fullWidth : {},
      fullHeight ? styles.fullHeight : {},
    ]

    const footerClass: CSSPropertiesRecursive = [
      styles.footerContainer,
      isBottom ? styles.extraMarginBottom : {}
    ]

    return (
      <>
        <Div css={cardContainer} style={{ height: this.state.height }}>
          <Div css={card} {...otherProps} innerRef={(ref: HTMLDivElement) => { this.cardRef = ref }}>
            {dismissible &&
              <Button css={styles.dismissCardButton} onClick={this.onHide}>
                <CloseIcon fill={Colors.SkBlue} />
              </Button>
            }
            {(title || subtitle) &&
              <>
                <Div css={headingClass}>
                  {title &&
                    <H2 css={styles.heading}>
                      <div dangerouslySetInnerHTML={{ __html: title }} />
                    </H2>
                  }
                  {subtitle &&
                    <H3 css={styles.subheading}>
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
          </Div>
        </Div>

        {footer &&
          <Div css={footerClass}>
            <Div css={styles.info}><InfoIcon /></Div>
            <Div css={styles.footer}>
              {footer}
            </Div>
          </Div>
        }

      </>
    )

  }

};
