import { scale } from '@utils/scaleUtils';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '100%'
  },
  image: {
    width: scale(80, 'screen'),
    height: scale(120, 'screen'),
    marginBottom: scale(24, 'vertically')
  },
  title: {
    textAlign: 'center'
  },
  author: {
    textAlign: 'center',
    marginTop: scale(12, 'vertically'),
    marginBottom: scale(8, 'vertically')
  },
  genre: {
    textAlign: 'center',
    fontSize: scale(10, 'font')
  }
});
