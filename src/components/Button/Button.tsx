import glamorous, { GlamorousComponent } from 'glamorous';
import { lighten, darken } from 'polished';
import { Colors } from '../../styles/Colors';
import { Fonts } from '../../styles/Fonts';

export interface ButtonProps {
  readonly secondary?: boolean
  readonly info?: boolean
  readonly ghost?: boolean
}

export type ButtonInterface = GlamorousComponent<ButtonProps & React.HTMLProps<HTMLButtonElement>, ButtonProps>;

const Button: ButtonInterface = glamorous.button<ButtonProps>(
  ({ secondary = false, info = false, ghost = false }) => {
    let color = secondary ? Colors.SkcgGrape : Colors.SkBlue;
    color = info ? Colors.SkCommercial : color; 
    const backgroundColor = ghost ? Colors.SkWhite : color;
    const fontColor = ghost ? color : Colors.SkWhite;
    const border = ghost ? `1px solid ${color}` : '0';
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: Fonts.Size.Default,
      fontWeight: 700,
      minWidth: '11rem',
      height: '50px',
      color: fontColor,
      backgroundColor,
      textDecoration: 'none',
      lineHeight: '1',
      userSelect: 'none',
      textAlign: 'center',
      padding: '0 20px',
      boxShadow: `0 1px 3px ${Colors.SkGrey}`,
      border,
      borderRadius: '2px',
      transition: 'background-color 0.2s, transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginBottom: '1rem',
      '&:hover': {
        backgroundColor: lighten(0.05, backgroundColor),
        textDecoration: 'none',
      },
      '&:active': {
        backgroundColor: darken(0.05, backgroundColor),
        boxShadow: 'none',
        outline: 'none',
        transform: 'scale(0.95)',
      },
      '&:focus': {
        outline: '0',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6)',
      }
    }
  }
);

export default Button;
