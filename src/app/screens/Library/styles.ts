import { themeValues } from '@constants/theme';
import { scale } from '@utils/scaleUtils';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  list: {
    padding: themeValues.sizes.paddingScreen
  },
  contentList: {
    paddingBottom: scale(32, 'vertically')
  }
});
