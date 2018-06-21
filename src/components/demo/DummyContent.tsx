import glamorous, { GlamorousComponent } from "glamorous";
import { Colors } from "../../styles/Colors";
import { lighten } from "polished";

export interface DummyContentProps {
  readonly height?: number
}

export const DummyContent: GlamorousComponent<DummyContentProps & React.HTMLProps<HTMLDivElement>, DummyContentProps> = glamorous.div<DummyContentProps>(
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
