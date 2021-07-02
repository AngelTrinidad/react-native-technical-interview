export interface ThemeColors {
  primary: string;
  secondary: string;
  text: string;
  textLight: string;
  primaryBackground: string;
}

export interface ThemeFont {
  bold: string;
  semiBold: string;
  medium: string;
  regular: string;
}

export interface ThemeSizes {
  paddingScreen: number;
}

export interface Theme {
  colors: ThemeColors;
  sizes: ThemeSizes;
  fonts: ThemeFont;
}
