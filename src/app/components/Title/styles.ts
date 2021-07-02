import { themeValues } from '@constants/theme';
import { scale } from '@utils/scaleUtils';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  title: {
    fontSize: scale(18, 'font'),
    fontFamily: themeValues.fonts.semiBold,
    fontWeight: '500',
    color: themeValues.colors.title
  }
});
