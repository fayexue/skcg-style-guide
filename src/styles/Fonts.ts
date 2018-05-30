import { FontWeightProperty } from "csstype";

export const Fonts = {
  LineHeight: {
      Default: 1.4,
      Detail: 1.2
  },
  Size: {
      // Hero
      Hero: '2.6rem',
      HeroDesktop: '4.2rem',
      // H1
      H1: '2.1rem',
      H1Desktop: '3.6rem',
      // H2
      H2: '1.8rem',
      H2Desktop: '3rem',
      // H3
      H3: '1.6rem',
      H3Desktop: '2.8rem',
      // H4
      H4: '2.2rem',
      // Standard
      Default: '1.6rem',
      Detail: '1.4rem',
  },
  Weight: {
      Light: 300 as FontWeightProperty,
      Normal: 400 as FontWeightProperty,
      SemiBold: 500 as FontWeightProperty,
      Bold: 700 as FontWeightProperty
  }
};
