import { themeValues } from '@constants/theme';
import { scale } from '@utils/scaleUtils';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    minHeight: 400,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: scale(20, 'vertically'),
    backgroundColor: themeValues.colors.cardBackground
  }
});
