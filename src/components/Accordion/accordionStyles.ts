import { Layout } from './../../styles/Layout';
import { Colors } from './../../styles/Colors';
import { MediaQueries } from './../../styles/MediaQueries';
import { css } from "glamor";

const button = css({
  appearance: "none",
  position: "relative",
  width: "100%",
  border: "none",
  borderRadius: "0",
  lineHeight: "1.3",
  cursor: "pointer",
  backgroundColor: Colors.SkGreyLight,
  display: "flex",
  justifyContent: "center",
  padding: "2.4rem 3rem",
  fontSize: "1.8rem",
  textAlign: "center",
  color: Colors.SkcgBlue,
  '&:focus': {
    outline: 'none',
  },
  [MediaQueries.SmMax]: {
    paddingLeft: 0,
    paddingRight: 0
  }
});

const icon = css({
  marginLeft: Layout.GridGutterWidth,
  transition: 'transform ease-out 0.16s',
});

const open = css({
  transform: 'rotate(180deg)'
});

const accordion = css({
  width: '100%'
});

const accordionContainer = css({
  transition: 'height 0.5s ease-out',
  overflow: 'hidden'
});

const styles = {
  accordionContainer,
  accordion,
  button,
  icon,
  open
}

export default styles;
