import { createTheming } from '@callstack/react-theme-provider';
import { Theme } from '@interfaces/theme';

export const themeValues: Theme = {
  colors: {
    primary: '#B5EAEA',
    secondary: '#F38BA0',
    text: '#6E7C7C',
    textLight: '#DDDDDD',
    primaryBackground: '#E8F6EF',
    title: '#343A40',
    header: '#39A2DB',
    bookItemBackground: 'white'
  },
  sizes: {
    paddingScreen: 16
  },
  fonts: {
    bold: 'system font',
    semiBold: 'system font',
    medium: 'system font',
    regular: 'system font'
  }
};

export const { ThemeProvider, withTheme, useTheme } = createTheming<Theme>(themeValues);
