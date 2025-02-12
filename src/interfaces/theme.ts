export interface ThemeColors {
  primary: string;
  secondary: string;
  text: string;
  textLight: string;
  primaryBackground: string;
  title: string;
  headerBackground: string;
  headerTitle: string;
  bookItemBackground: string;
  cardBackground: string;
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
