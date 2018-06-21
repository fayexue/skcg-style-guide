import * as React from 'react'
import { AccordionIcon } from '../../assets/Accordion';
import styles from './accordionStyles';
import { Button, Div } from 'glamorous';
import { css } from 'glamor';

export interface AccordionProps {
  parentName: string,
  title: string,
  openTitle?: string,
  initialIsCollapsed?: boolean,
  onClick?(): void,
  children?: React.ReactNode,
  openContent?: React.ReactNode,
  closedContent?: React.ReactNode,
}

export interface AccordionState {
  isCollapsed: boolean
  height: number | undefined
}

class Accordion extends React.Component<AccordionProps, AccordionState> {
  static defaultProps: Partial<AccordionProps> = {
    openTitle: 'Hide'
  }

  private accordionRef: HTMLDivElement | null = null;

  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: props.initialIsCollapsed,
      height: undefined
    };
  }

  componentDidMount() {
    this.getAccordionHeight();
  }

  componentDidUpdate() {
    this.getAccordionHeight();
  }

  private handleClick = (event) => {
    const { onClick } = this.props;

    const { isCollapsed } = this.state;

    event.preventDefault();

    const nextIsCollapsed = !isCollapsed;

    this.setState({ isCollapsed: nextIsCollapsed });

    if (onClick) {
      onClick();
    }
  }

  private getAccordionHeight = () => {
    if (this.accordionRef && this.state.height !== this.accordionRef.clientHeight) {
      this.setState({ height: this.accordionRef.clientHeight });
    }
  }

  render() {
    const {
      parentName,
      title,
      openTitle,
      children,
      openContent,
      closedContent,
    } = this.props;

    const { isCollapsed, height } = this.state;

    const content = !isCollapsed ? (openContent || children) : (closedContent || null);

    const iconStyle = css(
      styles.icon,
      !isCollapsed && styles.open
    )

    return (
      <>
        <Div css={styles.accordionContainer} style={{ height }}>
          <Div css={styles.accordion} innerRef={(ref: HTMLDivElement) => { this.accordionRef = ref }}>

            {content}

          </Div>
        </Div>
        <Button
          css={styles.button}
          onClick={this.handleClick}
          onKeyPress={this.handleClick}
          tabIndex={0}
          data-archive="expandable-trigger"
          data-analytics={`ui-button-toggle-accordion-${parentName}`}
          aria-expanded={!isCollapsed}
        >
          {!isCollapsed ? (openTitle || 'Hide') : title}
          <Div css={iconStyle}>
            <AccordionIcon />
          </Div>
        </Button>
      </>
    );
  }
}

export default Accordion;
