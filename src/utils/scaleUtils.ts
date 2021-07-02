import { moderateScale, verticalScale, scale as nativeScale } from 'react-native-size-matters';

/**
 * Function to scale any type of margin, padding or size value
 * @param {number} value Reference number
 * @param {'font' | 'vertically' | 'horizontally' | 'screen'} type Type of component
 * @returns {number} scaled value
 */
export const scale = (
  value: number,
  type: 'font' | 'vertically' | 'horizontally' | 'screen' = 'vertically'
): number => {
  switch (type) {
    case 'font':
      return moderateScale(value, 1);
    case 'vertically':
      return verticalScale(value);
    case 'horizontally':
      return nativeScale(value);
    case 'screen':
    default:
      return moderateScale(value, 1.5);
  }
};
