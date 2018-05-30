import glamorous from "glamorous";
import { Colors } from "../../styles/Colors";
import { lighten } from "polished";

interface Props {
  readonly height?: number
}

export const Content = glamorous.div<Props>(
  ({ height }) => {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: height || 200,
      color: Colors.SkCharcoal,
      backgroundColor: lighten(0.7, Colors.SkcgGrape)
    }
  }
)