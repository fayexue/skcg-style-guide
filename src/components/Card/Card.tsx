import * as React from 'react';
import { css } from 'glamor';
import { Div, Button } from 'glamorous';
import { CloseIcon } from '../../assets/CloseIcon';
import { Colors } from '../../styles/Colors';
import styles from './cardStyles';
import { InfoIcon } from '../../assets/InfoIcon';
import { Heading } from '../typography/Heading';
import { Subheading } from '../typography/Subheading';

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

class Card extends React.Component<CardProps, CardState> {
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

    const cardContainer = css(
      styles.cardContainer,
      noMarginTop ? styles.noMarginTop : {},
    );

    const card = css(
      styles.card,
      fullWidth && styles.fullWidth,
      fullHeight && styles.fullHeight,
      noPaddingBottom && styles.noPaddingBottom,
      dismissible && styles.dismissible
    );

    const headingClass = css(
      styles.headingContainer,
      mobileTitleHidden && styles.hidden,
    );

    const contentClass = css(
      styles.content,
      fullWidth && styles.fullWidth,
      fullHeight && styles.fullHeight,
    );

    const footerClass = css(
      styles.footerContainer,
      isBottom && styles.extraMarginBottom,
    );

    return (
      <>
        <Div css={cardContainer} style={{ height: this.state.height }} {...otherProps}>
          <Div css={card} innerRef={(ref: HTMLDivElement) => { this.cardRef = ref }}>
            {dismissible &&
              <Button css={styles.dismissCardButton} onClick={this.onHide}>
                <CloseIcon fill={Colors.SkBlue} />
              </Button>
            }
            {(title || subtitle) &&
              <>
                <Div css={headingClass}>
                  {title &&
                    <Heading css={styles.heading}>
                      {title}
                    </Heading>
                  }
                  {subtitle &&
                    <Subheading css={styles.subheading}>
                      {subtitle}
                    </Subheading>
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

export default Card;
