import { themeValues } from '@constants/theme';
import { scale } from '@utils/scaleUtils';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  text: {
    fontSize: scale(12, 'font'),
    fontFamily: themeValues.fonts.regular,
    fontWeight: '300',
    color: themeValues.colors.text
  }
});
