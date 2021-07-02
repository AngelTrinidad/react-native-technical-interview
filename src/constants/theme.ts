import { createTheming } from '@callstack/react-theme-provider';
import { Theme } from '@interfaces/theme';

export const themeValues: Theme = {
  colors: {
    primary: '#B5EAEA',
    secondary: '#F38BA0',
    text: '#444444',
    textLight: '#DDDDDD',
    primaryBackground: '#B5EAEA',
    title: '#343A40'
  },
  sizes: {
    paddingScreen: 12
  },
  fonts: {
    bold: 'system font',
    semiBold: 'system font',
    medium: 'system font',
    regular: 'system font'
  }
};

export const { ThemeProvider, withTheme, useTheme } = createTheming<Theme>(themeValues);
