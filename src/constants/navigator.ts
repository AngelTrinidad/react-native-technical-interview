import { StackNavigationOptions } from '@react-navigation/stack';
import { themeValues } from '@constants/theme';

export const DEFAULT_OPTIONS: StackNavigationOptions = {
  headerTintColor: themeValues.colors.headerTitle,
  headerStyle: {
    backgroundColor: themeValues.colors.headerBackground
  },
  headerTitleStyle: {
    textAlign: 'center'
  }
};
