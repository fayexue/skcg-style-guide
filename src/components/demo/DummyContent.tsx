import glamorous from "glamorous";
import { Colors } from "../../styles/Colors";
import { lighten } from "polished";

interface Props {
  readonly height?: number
}

export const DummyContent = glamorous.div<Props>(
  ({ height }) => {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: height || 200,
      color: Colors.SkBlue,
      backgroundColor: lighten(0.6, Colors.SkBlue)
    }
  }
);