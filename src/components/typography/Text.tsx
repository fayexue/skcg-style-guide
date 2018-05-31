import glamorous from "glamorous";
import { Colors } from "../../styles/Colors";
import { FontWeightProperty, ColorProperty, LineHeightProperty, FontSizeProperty } from "csstype";
import { Fonts } from "../../styles/Fonts";
import { Layout } from "../../styles/Layout";
import { MediaQueries } from "../../styles/MediaQueries";
import { multiply } from "../../utils/helper";

interface Props<TLength = string | 0> {
  fontSize?: FontSizeProperty<TLength>
  fontWeight?: FontWeightProperty
  lineHeight?: LineHeightProperty<TLength>
  color?: ColorProperty
  fontSizeDesktop?: FontSizeProperty<TLength>
  fontWeightDesktop?: FontWeightProperty
  lineHeightDesktop?: LineHeightProperty<TLength>
  colorDesktop?: ColorProperty
  isLast?: boolean
}

const Text = glamorous.div<Props>(
  (props) => {
    return {
      fontSize: props.fontSize || Fonts.Size.Default,
      fontWeight: props.fontWeight || Fonts.Weight.Normal,
      lineHeight: props.lineHeight || Fonts.LineHeight.Default,
      color: props.color || Colors.SkCharcoal,
      [MediaQueries.SmMin]: {
        fontSize: props.fontSizeDesktop || Fonts.Size.Default,
        fontWeight: props.fontWeightDesktop || Fonts.Weight.Normal,
        lineHeight: props.lineHeightDesktop || Fonts.LineHeight.Default,
        color: props.colorDesktop || Colors.SkCharcoal,
      },
      marginBottom: props.isLast ? 0 : multiply(Layout.GridRowHeight, 2)
    }
  }
);

export default Text;
