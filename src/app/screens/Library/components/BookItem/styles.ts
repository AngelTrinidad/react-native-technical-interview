import { themeValues } from '@constants/theme';
import { scale } from '@utils/scaleUtils';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: themeValues.colors.bookItemBackground,
    paddingVertical: scale(8, 'vertically'),
    paddingHorizontal: scale(12, 'horizontally'),
    borderRadius: 8,
    flexDirection: 'row',
    marginVertical: 4
  },
  image: {
    marginRight: scale(12, 'horizontally'),
    width: scale(40, 'screen'),
    height: scale(60, 'screen')
  }
});
